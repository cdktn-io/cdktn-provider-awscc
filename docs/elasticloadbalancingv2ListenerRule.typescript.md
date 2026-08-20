# `elasticloadbalancingv2ListenerRule` Submodule <a name="`elasticloadbalancingv2ListenerRule` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2ListenerRule <a name="Elasticloadbalancingv2ListenerRule" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule awscc_elasticloadbalancingv2_listener_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule(scope: Construct, id: string, config: Elasticloadbalancingv2ListenerRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig">Elasticloadbalancingv2ListenerRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig">Elasticloadbalancingv2ListenerRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTransforms">putTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetListenerArn">resetListenerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putActions"></a>

```typescript
public putActions(value: IResolvable | Elasticloadbalancingv2ListenerRuleActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>[]

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putConditions"></a>

```typescript
public putConditions(value: IResolvable | Elasticloadbalancingv2ListenerRuleConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTags"></a>

```typescript
public putTags(value: IResolvable | Elasticloadbalancingv2ListenerRuleTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>[]

---

##### `putTransforms` <a name="putTransforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTransforms"></a>

```typescript
public putTransforms(value: IResolvable | Elasticloadbalancingv2ListenerRuleTransforms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTransforms.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>[]

---

##### `resetListenerArn` <a name="resetListenerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetListenerArn"></a>

```typescript
public resetListenerArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetTransforms"></a>

```typescript
public resetTransforms(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2ListenerRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isConstruct"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformElement"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformResource"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Elasticloadbalancingv2ListenerRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Elasticloadbalancingv2ListenerRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Elasticloadbalancingv2ListenerRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2ListenerRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList">Elasticloadbalancingv2ListenerRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList">Elasticloadbalancingv2ListenerRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.isDefault">isDefault</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList">Elasticloadbalancingv2ListenerRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.transforms">transforms</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList">Elasticloadbalancingv2ListenerRuleTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.actionsInput">actionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.listenerArnInput">listenerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.transformsInput">transformsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.listenerArn">listenerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.actions"></a>

```typescript
public readonly actions: Elasticloadbalancingv2ListenerRuleActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList">Elasticloadbalancingv2ListenerRuleActionsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.conditions"></a>

```typescript
public readonly conditions: Elasticloadbalancingv2ListenerRuleConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList">Elasticloadbalancingv2ListenerRuleConditionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tags"></a>

```typescript
public readonly tags: Elasticloadbalancingv2ListenerRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList">Elasticloadbalancingv2ListenerRuleTagsList</a>

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.transforms"></a>

```typescript
public readonly transforms: Elasticloadbalancingv2ListenerRuleTransformsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList">Elasticloadbalancingv2ListenerRuleTransformsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | Elasticloadbalancingv2ListenerRuleActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>[]

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | Elasticloadbalancingv2ListenerRuleConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>[]

---

##### `listenerArnInput`<sup>Optional</sup> <a name="listenerArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.listenerArnInput"></a>

```typescript
public readonly listenerArnInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Elasticloadbalancingv2ListenerRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>[]

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.transformsInput"></a>

```typescript
public readonly transformsInput: IResolvable | Elasticloadbalancingv2ListenerRuleTransforms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>[]

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2ListenerRuleActions <a name="Elasticloadbalancingv2ListenerRuleActions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleActions: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.type">type</a></code> | <code>string</code> | The type of action. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.authenticateCognitoConfig">authenticateCognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a></code> | [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.authenticateOidcConfig">authenticateOidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a></code> | [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.fixedResponseConfig">fixedResponseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a></code> | [Application Load Balancer] Information for creating an action that returns a custom HTTP response. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.forwardConfig">forwardConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a></code> | Information for creating an action that distributes requests among multiple target groups. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.jwtValidationConfig">jwtValidationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a></code> | [HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.order">order</a></code> | <code>number</code> | The order for the action. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.redirectConfig">redirectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a></code> | [Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the target group. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#type Elasticloadbalancingv2ListenerRule#type}

---

##### `authenticateCognitoConfig`<sup>Optional</sup> <a name="authenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.authenticateCognitoConfig"></a>

```typescript
public readonly authenticateCognitoConfig: Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a>

[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#authenticate_cognito_config Elasticloadbalancingv2ListenerRule#authenticate_cognito_config}

---

##### `authenticateOidcConfig`<sup>Optional</sup> <a name="authenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.authenticateOidcConfig"></a>

```typescript
public readonly authenticateOidcConfig: Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a>

[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC).

Specify only when ``Type`` is ``authenticate-oidc``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#authenticate_oidc_config Elasticloadbalancingv2ListenerRule#authenticate_oidc_config}

---

##### `fixedResponseConfig`<sup>Optional</sup> <a name="fixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.fixedResponseConfig"></a>

```typescript
public readonly fixedResponseConfig: Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a>

[Application Load Balancer] Information for creating an action that returns a custom HTTP response.

Specify only when ``Type`` is ``fixed-response``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#fixed_response_config Elasticloadbalancingv2ListenerRule#fixed_response_config}

---

##### `forwardConfig`<sup>Optional</sup> <a name="forwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.forwardConfig"></a>

```typescript
public readonly forwardConfig: Elasticloadbalancingv2ListenerRuleActionsForwardConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a>

Information for creating an action that distributes requests among multiple target groups.

Specify only when ``Type`` is ``forward``.
 If you specify both ``ForwardConfig`` and ``TargetGroupArn``, you can specify only one target group using ``ForwardConfig`` and it must be the same target group specified in ``TargetGroupArn``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#forward_config Elasticloadbalancingv2ListenerRule#forward_config}

---

##### `jwtValidationConfig`<sup>Optional</sup> <a name="jwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.jwtValidationConfig"></a>

```typescript
public readonly jwtValidationConfig: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a>

[HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#jwt_validation_config Elasticloadbalancingv2ListenerRule#jwt_validation_config}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

The order for the action.

This value is required for rules with multiple actions. The action with the lowest value for order is performed first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#order Elasticloadbalancingv2ListenerRule#order}

---

##### `redirectConfig`<sup>Optional</sup> <a name="redirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.redirectConfig"></a>

```typescript
public readonly redirectConfig: Elasticloadbalancingv2ListenerRuleActionsRedirectConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a>

[Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#redirect_config Elasticloadbalancingv2ListenerRule#redirect_config}

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the target group.

Specify only when ``Type`` is ``forward`` and you want to route to a single target group. To route to multiple target groups, you must use ``ForwardConfig`` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#target_group_arn Elasticloadbalancingv2ListenerRule#target_group_arn}

---

### Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig <a name="Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | The query parameters (up to 10) to include in the redirect request to the authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | The behavior if the user is not authenticated. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.scope">scope</a></code> | <code>string</code> | The set of user claims to be requested from the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon Cognito user pool. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolClientId">userPoolClientId</a></code> | <code>string</code> | The ID of the Amazon Cognito user pool client. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolDomain">userPoolDomain</a></code> | <code>string</code> | The domain prefix or fully-qualified domain name of the Amazon Cognito user pool. |

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#authentication_request_extra_params Elasticloadbalancingv2ListenerRule#authentication_request_extra_params}

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

The behavior if the user is not authenticated.

The following are possible values:
  +  deny```` - Return an HTTP 401 Unauthorized error.
  +  allow```` - Allow the request to be forwarded to the target.
  +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#on_unauthenticated_request Elasticloadbalancingv2ListenerRule#on_unauthenticated_request}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The set of user claims to be requested from the IdP.

The default is ``openid``.
 To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#scope Elasticloadbalancingv2ListenerRule#scope}

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#session_cookie_name Elasticloadbalancingv2ListenerRule#session_cookie_name}

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#session_timeout Elasticloadbalancingv2ListenerRule#session_timeout}

---

##### `userPoolArn`<sup>Optional</sup> <a name="userPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_arn Elasticloadbalancingv2ListenerRule#user_pool_arn}

---

##### `userPoolClientId`<sup>Optional</sup> <a name="userPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolClientId"></a>

```typescript
public readonly userPoolClientId: string;
```

- *Type:* string

The ID of the Amazon Cognito user pool client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_client_id Elasticloadbalancingv2ListenerRule#user_pool_client_id}

---

##### `userPoolDomain`<sup>Optional</sup> <a name="userPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolDomain"></a>

```typescript
public readonly userPoolDomain: string;
```

- *Type:* string

The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_domain Elasticloadbalancingv2ListenerRule#user_pool_domain}

---

### Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig <a name="Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | The query parameters (up to 10) to include in the redirect request to the authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | The authorization endpoint of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.clientId">clientId</a></code> | <code>string</code> | The OAuth 2.0 client identifier. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.issuer">issuer</a></code> | <code>string</code> | The OIDC issuer identifier of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | The behavior if the user is not authenticated. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.scope">scope</a></code> | <code>string</code> | The set of user claims to be requested from the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The token endpoint of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.useExistingClientSecret">useExistingClientSecret</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to use the existing client secret when modifying a rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | The user info endpoint of the IdP. |

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#authentication_request_extra_params Elasticloadbalancingv2ListenerRule#authentication_request_extra_params}

---

##### `authorizationEndpoint`<sup>Optional</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

The authorization endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#authorization_endpoint Elasticloadbalancingv2ListenerRule#authorization_endpoint}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The OAuth 2.0 client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#client_id Elasticloadbalancingv2ListenerRule#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#client_secret Elasticloadbalancingv2ListenerRule#client_secret}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The OIDC issuer identifier of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#issuer Elasticloadbalancingv2ListenerRule#issuer}

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

The behavior if the user is not authenticated.

The following are possible values:
  +  deny```` - Return an HTTP 401 Unauthorized error.
  +  allow```` - Allow the request to be forwarded to the target.
  +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#on_unauthenticated_request Elasticloadbalancingv2ListenerRule#on_unauthenticated_request}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The set of user claims to be requested from the IdP.

The default is ``openid``.
 To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#scope Elasticloadbalancingv2ListenerRule#scope}

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#session_cookie_name Elasticloadbalancingv2ListenerRule#session_cookie_name}

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#session_timeout Elasticloadbalancingv2ListenerRule#session_timeout}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The token endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#token_endpoint Elasticloadbalancingv2ListenerRule#token_endpoint}

---

##### `useExistingClientSecret`<sup>Optional</sup> <a name="useExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.useExistingClientSecret"></a>

```typescript
public readonly useExistingClientSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to use the existing client secret when modifying a rule.

If you are creating a rule, you can omit this parameter or set it to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#use_existing_client_secret Elasticloadbalancingv2ListenerRule#use_existing_client_secret}

---

##### `userInfoEndpoint`<sup>Optional</sup> <a name="userInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

The user info endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#user_info_endpoint Elasticloadbalancingv2ListenerRule#user_info_endpoint}

---

### Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig <a name="Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.contentType">contentType</a></code> | <code>string</code> | The content type.  Valid Values: text/plain \| text/css \| text/html \| application/javascript \| application/json. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.messageBody">messageBody</a></code> | <code>string</code> | The message. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.statusCode">statusCode</a></code> | <code>string</code> | The HTTP response code (2XX, 4XX, or 5XX). |

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

The content type.  Valid Values: text/plain | text/css | text/html | application/javascript | application/json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#content_type Elasticloadbalancingv2ListenerRule#content_type}

---

##### `messageBody`<sup>Optional</sup> <a name="messageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.messageBody"></a>

```typescript
public readonly messageBody: string;
```

- *Type:* string

The message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#message_body Elasticloadbalancingv2ListenerRule#message_body}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

The HTTP response code (2XX, 4XX, or 5XX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#status_code Elasticloadbalancingv2ListenerRule#status_code}

---

### Elasticloadbalancingv2ListenerRuleActionsForwardConfig <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleActionsForwardConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.property.targetGroups">targetGroups</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>[]</code> | Information about how traffic will be distributed between multiple target groups in a forward rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.property.targetGroupStickinessConfig">targetGroupStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a></code> | Information about the target group stickiness for a rule. |

---

##### `targetGroups`<sup>Optional</sup> <a name="targetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.property.targetGroups"></a>

```typescript
public readonly targetGroups: IResolvable | Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>[]

Information about how traffic will be distributed between multiple target groups in a forward rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#target_groups Elasticloadbalancingv2ListenerRule#target_groups}

---

##### `targetGroupStickinessConfig`<sup>Optional</sup> <a name="targetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.property.targetGroupStickinessConfig"></a>

```typescript
public readonly targetGroupStickinessConfig: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a>

Information about the target group stickiness for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#target_group_stickiness_config Elasticloadbalancingv2ListenerRule#target_group_stickiness_config}

---

### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.property.weight">weight</a></code> | <code>number</code> | The weight. The range is 0 to 999. |

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#target_group_arn Elasticloadbalancingv2ListenerRule#target_group_arn}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

The weight. The range is 0 to 999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#weight Elasticloadbalancingv2ListenerRule#weight}

---

### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | [Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether target group stickiness is enabled. |

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

[Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group.

The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#duration_seconds Elasticloadbalancingv2ListenerRule#duration_seconds}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether target group stickiness is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#enabled Elasticloadbalancingv2ListenerRule#enabled}

---

### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.additionalClaims">additionalClaims</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#additional_claims Elasticloadbalancingv2ListenerRule#additional_claims}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#issuer Elasticloadbalancingv2ListenerRule#issuer}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.jwksEndpoint">jwksEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#jwks_endpoint Elasticloadbalancingv2ListenerRule#jwks_endpoint}. |

---

##### `additionalClaims`<sup>Optional</sup> <a name="additionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.additionalClaims"></a>

```typescript
public readonly additionalClaims: IResolvable | Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#additional_claims Elasticloadbalancingv2ListenerRule#additional_claims}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#issuer Elasticloadbalancingv2ListenerRule#issuer}.

---

##### `jwksEndpoint`<sup>Optional</sup> <a name="jwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.jwksEndpoint"></a>

```typescript
public readonly jwksEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#jwks_endpoint Elasticloadbalancingv2ListenerRule#jwks_endpoint}.

---

### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.format">format</a></code> | <code>string</code> | The format of the claim value. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.name">name</a></code> | <code>string</code> | The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.values">values</a></code> | <code>string[]</code> | The claim value. |

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

The format of the claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#format Elasticloadbalancingv2ListenerRule#format}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#name Elasticloadbalancingv2ListenerRule#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The claim value.

The maximum size of the list is 10. Each value can be up to 256 characters in length. If the format is ``space-separated-values``, the values can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleActionsRedirectConfig <a name="Elasticloadbalancingv2ListenerRuleActionsRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleActionsRedirectConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.host">host</a></code> | <code>string</code> | The hostname. This component is not percent-encoded. The hostname can contain #{host}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.path">path</a></code> | <code>string</code> | The absolute path, starting with the leading "/". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.port">port</a></code> | <code>string</code> | The port. You can specify a value from 1 to 65535 or #{port}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.protocol">protocol</a></code> | <code>string</code> | The protocol. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.query">query</a></code> | <code>string</code> | The query parameters, URL-encoded when necessary, but not percent-encoded. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.statusCode">statusCode</a></code> | <code>string</code> | The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302). |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The hostname. This component is not percent-encoded. The hostname can contain #{host}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#host Elasticloadbalancingv2ListenerRule#host}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The absolute path, starting with the leading "/".

This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#path Elasticloadbalancingv2ListenerRule#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

The port. You can specify a value from 1 to 65535 or #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#port Elasticloadbalancingv2ListenerRule#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol.

You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#protocol Elasticloadbalancingv2ListenerRule#protocol}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The query parameters, URL-encoded when necessary, but not percent-encoded.

Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#query Elasticloadbalancingv2ListenerRule#query}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#status_code Elasticloadbalancingv2ListenerRule#status_code}

---

### Elasticloadbalancingv2ListenerRuleConditions <a name="Elasticloadbalancingv2ListenerRuleConditions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleConditions: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.field">field</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.hostHeaderConfig">hostHeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a></code> | Information for a host header condition. Specify only when ``Field`` is ``host-header``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.httpHeaderConfig">httpHeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a></code> | Information for an HTTP header condition. Specify only when ``Field`` is ``http-header``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.httpRequestMethodConfig">httpRequestMethodConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a></code> | Information for an HTTP method condition. Specify only when ``Field`` is ``http-request-method``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.pathPatternConfig">pathPatternConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a></code> | Information for a path pattern condition. Specify only when ``Field`` is ``path-pattern``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.queryStringConfig">queryStringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a></code> | Information for a query string condition. Specify only when ``Field`` is ``query-string``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.regexValues">regexValues</a></code> | <code>string[]</code> | The regular expressions to match against the condition field. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.sourceIpConfig">sourceIpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a></code> | Information for a source IP condition. Specify only when ``Field`` is ``source-ip``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.values">values</a></code> | <code>string[]</code> | The condition value. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

The name of the field.

The possible values are:
  +  ``http-header`` ? [ALB] Matches on an HTTP header field.
  +  ``http-request-method`` ? [ALB] Matches on the HTTP request method.
  +  ``host-header`` ? [ALB] Matches on the host header.
  +  ``path-pattern`` ? [ALB] Matches on the URL path of the request.
  +  ``query-string`` ? [ALB] Matches on a query string parameter.
  +  ``source-ip`` ? [ALB, NLB] Matches on the source IP address. For ALB, use ``SourceIpConfig`` with ``Values`` to specify CIDR ranges. For NLB, use ``SourceIpConfig`` with ``IpAddressType`` to match the IP address type (``ipv4`` or ``ipv6``).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#field Elasticloadbalancingv2ListenerRule#field}

---

##### `hostHeaderConfig`<sup>Optional</sup> <a name="hostHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.hostHeaderConfig"></a>

```typescript
public readonly hostHeaderConfig: Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a>

Information for a host header condition. Specify only when ``Field`` is ``host-header``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#host_header_config Elasticloadbalancingv2ListenerRule#host_header_config}

---

##### `httpHeaderConfig`<sup>Optional</sup> <a name="httpHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.httpHeaderConfig"></a>

```typescript
public readonly httpHeaderConfig: Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a>

Information for an HTTP header condition. Specify only when ``Field`` is ``http-header``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#http_header_config Elasticloadbalancingv2ListenerRule#http_header_config}

---

##### `httpRequestMethodConfig`<sup>Optional</sup> <a name="httpRequestMethodConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.httpRequestMethodConfig"></a>

```typescript
public readonly httpRequestMethodConfig: Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a>

Information for an HTTP method condition. Specify only when ``Field`` is ``http-request-method``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#http_request_method_config Elasticloadbalancingv2ListenerRule#http_request_method_config}

---

##### `pathPatternConfig`<sup>Optional</sup> <a name="pathPatternConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.pathPatternConfig"></a>

```typescript
public readonly pathPatternConfig: Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a>

Information for a path pattern condition. Specify only when ``Field`` is ``path-pattern``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#path_pattern_config Elasticloadbalancingv2ListenerRule#path_pattern_config}

---

##### `queryStringConfig`<sup>Optional</sup> <a name="queryStringConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.queryStringConfig"></a>

```typescript
public readonly queryStringConfig: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a>

Information for a query string condition. Specify only when ``Field`` is ``query-string``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#query_string_config Elasticloadbalancingv2ListenerRule#query_string_config}

---

##### `regexValues`<sup>Optional</sup> <a name="regexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.regexValues"></a>

```typescript
public readonly regexValues: string[];
```

- *Type:* string[]

The regular expressions to match against the condition field.

The maximum length of each string is 128 characters. Specify only when ``Field`` is ``http-header``, ``host-header``, or ``path-pattern``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}

---

##### `sourceIpConfig`<sup>Optional</sup> <a name="sourceIpConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.sourceIpConfig"></a>

```typescript
public readonly sourceIpConfig: Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a>

Information for a source IP condition. Specify only when ``Field`` is ``source-ip``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#source_ip_config Elasticloadbalancingv2ListenerRule#source_ip_config}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The condition value.

Specify only when ``Field`` is ``host-header`` or ``path-pattern``. Alternatively, to specify multiple host names or multiple path patterns, use ``HostHeaderConfig`` or ``PathPatternConfig``.
 If ``Field`` is ``host-header`` and you're not using ``HostHeaderConfig``, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters.
  +  A-Z, a-z, 0-9
  +  - .
  +  * (matches 0 or more characters)
  +  ? (matches exactly 1 character)
  
 If ``Field`` is ``path-pattern`` and you're not using ``PathPatternConfig``, you can specify a single path pattern (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters.
  +  A-Z, a-z, 0-9
  +  _ - . $ / ~ " ' @ : +
  +  & (using &amp;)
  +  * (matches 0 or more characters)
  +  ? (matches exactly 1 character)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.property.regexValues">regexValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.property.values">values</a></code> | <code>string[]</code> | The host names. |

---

##### `regexValues`<sup>Optional</sup> <a name="regexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.property.regexValues"></a>

```typescript
public readonly regexValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The host names.

The maximum length of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). You must include at least one "." character. You can include only alphabetical characters after the final "." character.
 If you specify multiple strings, the condition is satisfied if one of the strings matches the host name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.httpHeaderName">httpHeaderName</a></code> | <code>string</code> | The name of the HTTP header field. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.regexValues">regexValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.values">values</a></code> | <code>string[]</code> | The strings to compare against the value of the HTTP header. |

---

##### `httpHeaderName`<sup>Optional</sup> <a name="httpHeaderName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.httpHeaderName"></a>

```typescript
public readonly httpHeaderName: string;
```

- *Type:* string

The name of the HTTP header field.

The maximum size is 40 characters. The header name is case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#http_header_name Elasticloadbalancingv2ListenerRule#http_header_name}

---

##### `regexValues`<sup>Optional</sup> <a name="regexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.regexValues"></a>

```typescript
public readonly regexValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The strings to compare against the value of the HTTP header.

The maximum length of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
 If the same header appears multiple times in the request, we search them in order until a match is found.
 If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig.property.values">values</a></code> | <code>string[]</code> | The name of the request method. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The name of the request method.

The maximum length is 40 characters. The allowed characters are A-Z, hyphen (-), and underscore (_). The comparison is case sensitive. Wildcards are not supported; therefore, the method name must be an exact match.
 If you specify multiple strings, the condition is satisfied if one of the strings matches the HTTP request method. We recommend that you route GET and HEAD requests in the same way, because the response to a HEAD request may be cached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.property.regexValues">regexValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.property.values">values</a></code> | <code>string[]</code> | The path patterns to compare against the request URL. |

---

##### `regexValues`<sup>Optional</sup> <a name="regexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.property.regexValues"></a>

```typescript
public readonly regexValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The path patterns to compare against the request URL.

The maximum size of each string is 128 characters. The comparison is case sensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
 If you specify multiple strings, the condition is satisfied if one of them matches the request URL. The path pattern is compared only to the path of the URL, not to its query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig.property.values">values</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>[]</code> | The key/value pairs or values to find in the query string. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig.property.values"></a>

```typescript
public readonly values: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>[]

The key/value pairs or values to find in the query string.

The maximum length of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string, you must escape these characters in ``Values`` using a '\' character.
 If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.property.key">key</a></code> | <code>string</code> | The key. You can omit the key. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.property.value">value</a></code> | <code>string</code> | The value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key. You can omit the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#key Elasticloadbalancingv2ListenerRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#value Elasticloadbalancingv2ListenerRule#value}

---

### Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#ip_address_type Elasticloadbalancingv2ListenerRule#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.property.values">values</a></code> | <code>string[]</code> | The source IP addresses, in CIDR format. |

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#ip_address_type Elasticloadbalancingv2ListenerRule#ip_address_type}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The source IP addresses, in CIDR format.

You can use both IPv4 and IPv6 addresses. Wildcards are not supported.
 If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConfig <a name="Elasticloadbalancingv2ListenerRuleConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.actions">actions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>[]</code> | The actions. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>[]</code> | The conditions. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.priority">priority</a></code> | <code>number</code> | The rule priority. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.listenerArn">listenerArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the listener. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#tags Elasticloadbalancingv2ListenerRule#tags}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.transforms">transforms</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#transforms Elasticloadbalancingv2ListenerRule#transforms}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.actions"></a>

```typescript
public readonly actions: IResolvable | Elasticloadbalancingv2ListenerRuleActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>[]

The actions.

The rule must include exactly one of the following types of actions: ``forward``, ``fixed-response``, or ``redirect``, and it must be the last action to be performed. If the rule is for an HTTPS listener, it can also optionally include an authentication action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#actions Elasticloadbalancingv2ListenerRule#actions}

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | Elasticloadbalancingv2ListenerRuleConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>[]

The conditions.

The rule can optionally include up to one of each of the following conditions: ``http-request-method``, ``host-header``, ``path-pattern``, and ``source-ip``. A rule can also optionally include one or more of each of the following conditions: ``http-header`` and ``query-string``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#conditions Elasticloadbalancingv2ListenerRule#conditions}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The rule priority.

A listener can't have multiple rules with the same priority.
 If you try to reorder rules by updating their priorities, do not specify a new priority if an existing rule already uses this priority, as this can cause an error. If you need to reuse a priority with a different rule, you must remove it as a priority first, and then specify it in a subsequent update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#priority Elasticloadbalancingv2ListenerRule#priority}

---

##### `listenerArn`<sup>Optional</sup> <a name="listenerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#listener_arn Elasticloadbalancingv2ListenerRule#listener_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Elasticloadbalancingv2ListenerRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#tags Elasticloadbalancingv2ListenerRule#tags}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.transforms"></a>

```typescript
public readonly transforms: IResolvable | Elasticloadbalancingv2ListenerRuleTransforms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#transforms Elasticloadbalancingv2ListenerRule#transforms}.

---

### Elasticloadbalancingv2ListenerRuleTags <a name="Elasticloadbalancingv2ListenerRuleTags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleTags: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#key Elasticloadbalancingv2ListenerRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#value Elasticloadbalancingv2ListenerRule#value}

---

### Elasticloadbalancingv2ListenerRuleTransforms <a name="Elasticloadbalancingv2ListenerRuleTransforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleTransforms: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.hostHeaderRewriteConfig">hostHeaderRewriteConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#host_header_rewrite_config Elasticloadbalancingv2ListenerRule#host_header_rewrite_config}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#type Elasticloadbalancingv2ListenerRule#type}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.urlRewriteConfig">urlRewriteConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#url_rewrite_config Elasticloadbalancingv2ListenerRule#url_rewrite_config}. |

---

##### `hostHeaderRewriteConfig`<sup>Optional</sup> <a name="hostHeaderRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.hostHeaderRewriteConfig"></a>

```typescript
public readonly hostHeaderRewriteConfig: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#host_header_rewrite_config Elasticloadbalancingv2ListenerRule#host_header_rewrite_config}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#type Elasticloadbalancingv2ListenerRule#type}.

---

##### `urlRewriteConfig`<sup>Optional</sup> <a name="urlRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.urlRewriteConfig"></a>

```typescript
public readonly urlRewriteConfig: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#url_rewrite_config Elasticloadbalancingv2ListenerRule#url_rewrite_config}.

---

### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig.property.rewrites">rewrites</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}. |

---

##### `rewrites`<sup>Optional</sup> <a name="rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig.property.rewrites"></a>

```typescript
public readonly rewrites: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}.

---

### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.property.regex">regex</a></code> | <code>string</code> | The regular expression to match in the input string. The maximum length of the string is 1,024 characters. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.property.replace">replace</a></code> | <code>string</code> | The replacement string to use when rewriting the matched input. |

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

The regular expression to match in the input string. The maximum length of the string is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#regex Elasticloadbalancingv2ListenerRule#regex}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.property.replace"></a>

```typescript
public readonly replace: string;
```

- *Type:* string

The replacement string to use when rewriting the matched input.

The maximum length of the string is 1,024 characters. You can specify capture groups in the regular expression (for example, $1 and $2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#replace Elasticloadbalancingv2ListenerRule#replace}

---

### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig.property.rewrites">rewrites</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}. |

---

##### `rewrites`<sup>Optional</sup> <a name="rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig.property.rewrites"></a>

```typescript
public readonly rewrites: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}.

---

### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites: elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.property.regex">regex</a></code> | <code>string</code> | The regular expression to match in the input string. The maximum length of the string is 1,024 characters. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.property.replace">replace</a></code> | <code>string</code> | The replacement string to use when rewriting the matched input. |

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

The regular expression to match in the input string. The maximum length of the string is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#regex Elasticloadbalancingv2ListenerRule#regex}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.property.replace"></a>

```typescript
public readonly replace: string;
```

- *Type:* string

The replacement string to use when rewriting the matched input.

The maximum length of the string is 1,024 characters. You can specify capture groups in the regular expression (for example, $1 and $2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_listener_rule#replace Elasticloadbalancingv2ListenerRule#replace}

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolArn">resetUserPoolArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolClientId">resetUserPoolClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolDomain">resetUserPoolDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```typescript
public resetAuthenticationRequestExtraParams(): void
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetOnUnauthenticatedRequest"></a>

```typescript
public resetOnUnauthenticatedRequest(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetSessionCookieName"></a>

```typescript
public resetSessionCookieName(): void
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetSessionTimeout"></a>

```typescript
public resetSessionTimeout(): void
```

##### `resetUserPoolArn` <a name="resetUserPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolArn"></a>

```typescript
public resetUserPoolArn(): void
```

##### `resetUserPoolClientId` <a name="resetUserPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolClientId"></a>

```typescript
public resetUserPoolClientId(): void
```

##### `resetUserPoolDomain` <a name="resetUserPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolDomain"></a>

```typescript
public resetUserPoolDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolArnInput">userPoolArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientIdInput">userPoolClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomainInput">userPoolDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId">userPoolClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain">userPoolDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```typescript
public readonly authenticationRequestExtraParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequestInput"></a>

```typescript
public readonly onUnauthenticatedRequestInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieNameInput"></a>

```typescript
public readonly sessionCookieNameInput: string;
```

- *Type:* string

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeoutInput"></a>

```typescript
public readonly sessionTimeoutInput: number;
```

- *Type:* number

---

##### `userPoolArnInput`<sup>Optional</sup> <a name="userPoolArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolArnInput"></a>

```typescript
public readonly userPoolArnInput: string;
```

- *Type:* string

---

##### `userPoolClientIdInput`<sup>Optional</sup> <a name="userPoolClientIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientIdInput"></a>

```typescript
public readonly userPoolClientIdInput: string;
```

- *Type:* string

---

##### `userPoolDomainInput`<sup>Optional</sup> <a name="userPoolDomainInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomainInput"></a>

```typescript
public readonly userPoolDomainInput: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId"></a>

```typescript
public readonly userPoolClientId: string;
```

- *Type:* string

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain"></a>

```typescript
public readonly userPoolDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetAuthorizationEndpoint">resetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetUseExistingClientSecret">resetUseExistingClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetUserInfoEndpoint">resetUserInfoEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```typescript
public resetAuthenticationRequestExtraParams(): void
```

##### `resetAuthorizationEndpoint` <a name="resetAuthorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetAuthorizationEndpoint"></a>

```typescript
public resetAuthorizationEndpoint(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetOnUnauthenticatedRequest"></a>

```typescript
public resetOnUnauthenticatedRequest(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetSessionCookieName"></a>

```typescript
public resetSessionCookieName(): void
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetSessionTimeout"></a>

```typescript
public resetSessionTimeout(): void
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetTokenEndpoint"></a>

```typescript
public resetTokenEndpoint(): void
```

##### `resetUseExistingClientSecret` <a name="resetUseExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetUseExistingClientSecret"></a>

```typescript
public resetUseExistingClientSecret(): void
```

##### `resetUserInfoEndpoint` <a name="resetUserInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetUserInfoEndpoint"></a>

```typescript
public resetUserInfoEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecretInput">useExistingClientSecretInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpointInput">userInfoEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret">useExistingClientSecret</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```typescript
public readonly authenticationRequestExtraParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpointInput"></a>

```typescript
public readonly authorizationEndpointInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequestInput"></a>

```typescript
public readonly onUnauthenticatedRequestInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionCookieNameInput"></a>

```typescript
public readonly sessionCookieNameInput: string;
```

- *Type:* string

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionTimeoutInput"></a>

```typescript
public readonly sessionTimeoutInput: number;
```

- *Type:* number

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `useExistingClientSecretInput`<sup>Optional</sup> <a name="useExistingClientSecretInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecretInput"></a>

```typescript
public readonly useExistingClientSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userInfoEndpointInput`<sup>Optional</sup> <a name="userInfoEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpointInput"></a>

```typescript
public readonly userInfoEndpointInput: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: number;
```

- *Type:* number

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `useExistingClientSecret`<sup>Required</sup> <a name="useExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret"></a>

```typescript
public readonly useExistingClientSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetMessageBody">resetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetMessageBody` <a name="resetMessageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetMessageBody"></a>

```typescript
public resetMessageBody(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.messageBodyInput">messageBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.messageBody">messageBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `messageBodyInput`<sup>Optional</sup> <a name="messageBodyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.messageBodyInput"></a>

```typescript
public readonly messageBodyInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `messageBody`<sup>Required</sup> <a name="messageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.messageBody"></a>

```typescript
public readonly messageBody: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroups">putTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroupStickinessConfig">putTargetGroupStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resetTargetGroups">resetTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resetTargetGroupStickinessConfig">resetTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetGroups` <a name="putTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroups"></a>

```typescript
public putTargetGroups(value: IResolvable | Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>[]

---

##### `putTargetGroupStickinessConfig` <a name="putTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroupStickinessConfig"></a>

```typescript
public putTargetGroupStickinessConfig(value: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroupStickinessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a>

---

##### `resetTargetGroups` <a name="resetTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resetTargetGroups"></a>

```typescript
public resetTargetGroups(): void
```

##### `resetTargetGroupStickinessConfig` <a name="resetTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resetTargetGroupStickinessConfig"></a>

```typescript
public resetTargetGroupStickinessConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroups">targetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupStickinessConfig">targetGroupStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupsInput">targetGroupsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupStickinessConfigInput">targetGroupStickinessConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetGroups`<sup>Required</sup> <a name="targetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroups"></a>

```typescript
public readonly targetGroups: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList</a>

---

##### `targetGroupStickinessConfig`<sup>Required</sup> <a name="targetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupStickinessConfig"></a>

```typescript
public readonly targetGroupStickinessConfig: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference</a>

---

##### `targetGroupsInput`<sup>Optional</sup> <a name="targetGroupsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupsInput"></a>

```typescript
public readonly targetGroupsInput: IResolvable | Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>[]

---

##### `targetGroupStickinessConfigInput`<sup>Optional</sup> <a name="targetGroupStickinessConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupStickinessConfigInput"></a>

```typescript
public readonly targetGroupStickinessConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleActionsForwardConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>[]

---


### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resetTargetGroupArn"></a>

```typescript
public resetTargetGroupArn(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArnInput"></a>

```typescript
public readonly targetGroupArnInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>

---


### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetDurationSeconds"></a>

```typescript
public resetDurationSeconds(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSecondsInput">durationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSecondsInput"></a>

```typescript
public readonly durationSecondsInput: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>[]

---


### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>

---


### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.putAdditionalClaims">putAdditionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetAdditionalClaims">resetAdditionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetJwksEndpoint">resetJwksEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalClaims` <a name="putAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.putAdditionalClaims"></a>

```typescript
public putAdditionalClaims(value: IResolvable | Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.putAdditionalClaims.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>[]

---

##### `resetAdditionalClaims` <a name="resetAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetAdditionalClaims"></a>

```typescript
public resetAdditionalClaims(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetJwksEndpoint` <a name="resetJwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetJwksEndpoint"></a>

```typescript
public resetJwksEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.additionalClaims">additionalClaims</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.additionalClaimsInput">additionalClaimsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.jwksEndpointInput">jwksEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.jwksEndpoint">jwksEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalClaims`<sup>Required</sup> <a name="additionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.additionalClaims"></a>

```typescript
public readonly additionalClaims: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList</a>

---

##### `additionalClaimsInput`<sup>Optional</sup> <a name="additionalClaimsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.additionalClaimsInput"></a>

```typescript
public readonly additionalClaimsInput: IResolvable | Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>[]

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `jwksEndpointInput`<sup>Optional</sup> <a name="jwksEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.jwksEndpointInput"></a>

```typescript
public readonly jwksEndpointInput: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `jwksEndpoint`<sup>Required</sup> <a name="jwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.jwksEndpoint"></a>

```typescript
public readonly jwksEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsList <a name="Elasticloadbalancingv2ListenerRuleActionsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>[]

---


### Elasticloadbalancingv2ListenerRuleActionsOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig">putAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig">putAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putFixedResponseConfig">putFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putForwardConfig">putForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putJwtValidationConfig">putJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putRedirectConfig">putRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetAuthenticateCognitoConfig">resetAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetAuthenticateOidcConfig">resetAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetFixedResponseConfig">resetFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetForwardConfig">resetForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetJwtValidationConfig">resetJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetRedirectConfig">resetRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticateCognitoConfig` <a name="putAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig"></a>

```typescript
public putAuthenticateCognitoConfig(value: Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a>

---

##### `putAuthenticateOidcConfig` <a name="putAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig"></a>

```typescript
public putAuthenticateOidcConfig(value: Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a>

---

##### `putFixedResponseConfig` <a name="putFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putFixedResponseConfig"></a>

```typescript
public putFixedResponseConfig(value: Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putFixedResponseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a>

---

##### `putForwardConfig` <a name="putForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putForwardConfig"></a>

```typescript
public putForwardConfig(value: Elasticloadbalancingv2ListenerRuleActionsForwardConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putForwardConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a>

---

##### `putJwtValidationConfig` <a name="putJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putJwtValidationConfig"></a>

```typescript
public putJwtValidationConfig(value: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putJwtValidationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a>

---

##### `putRedirectConfig` <a name="putRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putRedirectConfig"></a>

```typescript
public putRedirectConfig(value: Elasticloadbalancingv2ListenerRuleActionsRedirectConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putRedirectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a>

---

##### `resetAuthenticateCognitoConfig` <a name="resetAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetAuthenticateCognitoConfig"></a>

```typescript
public resetAuthenticateCognitoConfig(): void
```

##### `resetAuthenticateOidcConfig` <a name="resetAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetAuthenticateOidcConfig"></a>

```typescript
public resetAuthenticateOidcConfig(): void
```

##### `resetFixedResponseConfig` <a name="resetFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetFixedResponseConfig"></a>

```typescript
public resetFixedResponseConfig(): void
```

##### `resetForwardConfig` <a name="resetForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetForwardConfig"></a>

```typescript
public resetForwardConfig(): void
```

##### `resetJwtValidationConfig` <a name="resetJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetJwtValidationConfig"></a>

```typescript
public resetJwtValidationConfig(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetRedirectConfig` <a name="resetRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetRedirectConfig"></a>

```typescript
public resetRedirectConfig(): void
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetTargetGroupArn"></a>

```typescript
public resetTargetGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateCognitoConfig">authenticateCognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateOidcConfig">authenticateOidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fixedResponseConfig">fixedResponseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.forwardConfig">forwardConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.jwtValidationConfig">jwtValidationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.redirectConfig">redirectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateCognitoConfigInput">authenticateCognitoConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateOidcConfigInput">authenticateOidcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fixedResponseConfigInput">fixedResponseConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.forwardConfigInput">forwardConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.jwtValidationConfigInput">jwtValidationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.redirectConfigInput">redirectConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticateCognitoConfig`<sup>Required</sup> <a name="authenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateCognitoConfig"></a>

```typescript
public readonly authenticateCognitoConfig: Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference</a>

---

##### `authenticateOidcConfig`<sup>Required</sup> <a name="authenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateOidcConfig"></a>

```typescript
public readonly authenticateOidcConfig: Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference</a>

---

##### `fixedResponseConfig`<sup>Required</sup> <a name="fixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fixedResponseConfig"></a>

```typescript
public readonly fixedResponseConfig: Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference</a>

---

##### `forwardConfig`<sup>Required</sup> <a name="forwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.forwardConfig"></a>

```typescript
public readonly forwardConfig: Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference</a>

---

##### `jwtValidationConfig`<sup>Required</sup> <a name="jwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.jwtValidationConfig"></a>

```typescript
public readonly jwtValidationConfig: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference</a>

---

##### `redirectConfig`<sup>Required</sup> <a name="redirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.redirectConfig"></a>

```typescript
public readonly redirectConfig: Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference</a>

---

##### `authenticateCognitoConfigInput`<sup>Optional</sup> <a name="authenticateCognitoConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateCognitoConfigInput"></a>

```typescript
public readonly authenticateCognitoConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a>

---

##### `authenticateOidcConfigInput`<sup>Optional</sup> <a name="authenticateOidcConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateOidcConfigInput"></a>

```typescript
public readonly authenticateOidcConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a>

---

##### `fixedResponseConfigInput`<sup>Optional</sup> <a name="fixedResponseConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fixedResponseConfigInput"></a>

```typescript
public readonly fixedResponseConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a>

---

##### `forwardConfigInput`<sup>Optional</sup> <a name="forwardConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.forwardConfigInput"></a>

```typescript
public readonly forwardConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleActionsForwardConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a>

---

##### `jwtValidationConfigInput`<sup>Optional</sup> <a name="jwtValidationConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.jwtValidationConfigInput"></a>

```typescript
public readonly jwtValidationConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `redirectConfigInput`<sup>Optional</sup> <a name="redirectConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.redirectConfigInput"></a>

```typescript
public readonly redirectConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleActionsRedirectConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a>

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.targetGroupArnInput"></a>

```typescript
public readonly targetGroupArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>

---


### Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleActionsRedirectConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resetRegexValues">resetRegexValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegexValues` <a name="resetRegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resetRegexValues"></a>

```typescript
public resetRegexValues(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.regexValuesInput">regexValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.regexValues">regexValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexValuesInput`<sup>Optional</sup> <a name="regexValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.regexValuesInput"></a>

```typescript
public readonly regexValuesInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `regexValues`<sup>Required</sup> <a name="regexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.regexValues"></a>

```typescript
public readonly regexValues: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetHttpHeaderName">resetHttpHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetRegexValues">resetRegexValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpHeaderName` <a name="resetHttpHeaderName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetHttpHeaderName"></a>

```typescript
public resetHttpHeaderName(): void
```

##### `resetRegexValues` <a name="resetRegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetRegexValues"></a>

```typescript
public resetRegexValues(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.httpHeaderNameInput">httpHeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.regexValuesInput">regexValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.httpHeaderName">httpHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.regexValues">regexValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpHeaderNameInput`<sup>Optional</sup> <a name="httpHeaderNameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.httpHeaderNameInput"></a>

```typescript
public readonly httpHeaderNameInput: string;
```

- *Type:* string

---

##### `regexValuesInput`<sup>Optional</sup> <a name="regexValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.regexValuesInput"></a>

```typescript
public readonly regexValuesInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `httpHeaderName`<sup>Required</sup> <a name="httpHeaderName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.httpHeaderName"></a>

```typescript
public readonly httpHeaderName: string;
```

- *Type:* string

---

##### `regexValues`<sup>Required</sup> <a name="regexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.regexValues"></a>

```typescript
public readonly regexValues: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsList <a name="Elasticloadbalancingv2ListenerRuleConditionsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>[]

---


### Elasticloadbalancingv2ListenerRuleConditionsOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHostHeaderConfig">putHostHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpHeaderConfig">putHttpHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpRequestMethodConfig">putHttpRequestMethodConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putPathPatternConfig">putPathPatternConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putQueryStringConfig">putQueryStringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putSourceIpConfig">putSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHostHeaderConfig">resetHostHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHttpHeaderConfig">resetHttpHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHttpRequestMethodConfig">resetHttpRequestMethodConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetPathPatternConfig">resetPathPatternConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetQueryStringConfig">resetQueryStringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetRegexValues">resetRegexValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetSourceIpConfig">resetSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostHeaderConfig` <a name="putHostHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHostHeaderConfig"></a>

```typescript
public putHostHeaderConfig(value: Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHostHeaderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a>

---

##### `putHttpHeaderConfig` <a name="putHttpHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpHeaderConfig"></a>

```typescript
public putHttpHeaderConfig(value: Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpHeaderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a>

---

##### `putHttpRequestMethodConfig` <a name="putHttpRequestMethodConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpRequestMethodConfig"></a>

```typescript
public putHttpRequestMethodConfig(value: Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpRequestMethodConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a>

---

##### `putPathPatternConfig` <a name="putPathPatternConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putPathPatternConfig"></a>

```typescript
public putPathPatternConfig(value: Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putPathPatternConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a>

---

##### `putQueryStringConfig` <a name="putQueryStringConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putQueryStringConfig"></a>

```typescript
public putQueryStringConfig(value: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putQueryStringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a>

---

##### `putSourceIpConfig` <a name="putSourceIpConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putSourceIpConfig"></a>

```typescript
public putSourceIpConfig(value: Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putSourceIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a>

---

##### `resetField` <a name="resetField" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetField"></a>

```typescript
public resetField(): void
```

##### `resetHostHeaderConfig` <a name="resetHostHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHostHeaderConfig"></a>

```typescript
public resetHostHeaderConfig(): void
```

##### `resetHttpHeaderConfig` <a name="resetHttpHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHttpHeaderConfig"></a>

```typescript
public resetHttpHeaderConfig(): void
```

##### `resetHttpRequestMethodConfig` <a name="resetHttpRequestMethodConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHttpRequestMethodConfig"></a>

```typescript
public resetHttpRequestMethodConfig(): void
```

##### `resetPathPatternConfig` <a name="resetPathPatternConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetPathPatternConfig"></a>

```typescript
public resetPathPatternConfig(): void
```

##### `resetQueryStringConfig` <a name="resetQueryStringConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetQueryStringConfig"></a>

```typescript
public resetQueryStringConfig(): void
```

##### `resetRegexValues` <a name="resetRegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetRegexValues"></a>

```typescript
public resetRegexValues(): void
```

##### `resetSourceIpConfig` <a name="resetSourceIpConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetSourceIpConfig"></a>

```typescript
public resetSourceIpConfig(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.hostHeaderConfig">hostHeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpHeaderConfig">httpHeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpRequestMethodConfig">httpRequestMethodConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.pathPatternConfig">pathPatternConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.queryStringConfig">queryStringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.sourceIpConfig">sourceIpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.hostHeaderConfigInput">hostHeaderConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpHeaderConfigInput">httpHeaderConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpRequestMethodConfigInput">httpRequestMethodConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.pathPatternConfigInput">pathPatternConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.queryStringConfigInput">queryStringConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.regexValuesInput">regexValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.sourceIpConfigInput">sourceIpConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.regexValues">regexValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostHeaderConfig`<sup>Required</sup> <a name="hostHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.hostHeaderConfig"></a>

```typescript
public readonly hostHeaderConfig: Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference</a>

---

##### `httpHeaderConfig`<sup>Required</sup> <a name="httpHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpHeaderConfig"></a>

```typescript
public readonly httpHeaderConfig: Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference</a>

---

##### `httpRequestMethodConfig`<sup>Required</sup> <a name="httpRequestMethodConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpRequestMethodConfig"></a>

```typescript
public readonly httpRequestMethodConfig: Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference</a>

---

##### `pathPatternConfig`<sup>Required</sup> <a name="pathPatternConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.pathPatternConfig"></a>

```typescript
public readonly pathPatternConfig: Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference</a>

---

##### `queryStringConfig`<sup>Required</sup> <a name="queryStringConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.queryStringConfig"></a>

```typescript
public readonly queryStringConfig: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference</a>

---

##### `sourceIpConfig`<sup>Required</sup> <a name="sourceIpConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.sourceIpConfig"></a>

```typescript
public readonly sourceIpConfig: Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `hostHeaderConfigInput`<sup>Optional</sup> <a name="hostHeaderConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.hostHeaderConfigInput"></a>

```typescript
public readonly hostHeaderConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a>

---

##### `httpHeaderConfigInput`<sup>Optional</sup> <a name="httpHeaderConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpHeaderConfigInput"></a>

```typescript
public readonly httpHeaderConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a>

---

##### `httpRequestMethodConfigInput`<sup>Optional</sup> <a name="httpRequestMethodConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpRequestMethodConfigInput"></a>

```typescript
public readonly httpRequestMethodConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a>

---

##### `pathPatternConfigInput`<sup>Optional</sup> <a name="pathPatternConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.pathPatternConfigInput"></a>

```typescript
public readonly pathPatternConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a>

---

##### `queryStringConfigInput`<sup>Optional</sup> <a name="queryStringConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.queryStringConfigInput"></a>

```typescript
public readonly queryStringConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a>

---

##### `regexValuesInput`<sup>Optional</sup> <a name="regexValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.regexValuesInput"></a>

```typescript
public readonly regexValuesInput: string[];
```

- *Type:* string[]

---

##### `sourceIpConfigInput`<sup>Optional</sup> <a name="sourceIpConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.sourceIpConfigInput"></a>

```typescript
public readonly sourceIpConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `regexValues`<sup>Required</sup> <a name="regexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.regexValues"></a>

```typescript
public readonly regexValues: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resetRegexValues">resetRegexValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegexValues` <a name="resetRegexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resetRegexValues"></a>

```typescript
public resetRegexValues(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.regexValuesInput">regexValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.regexValues">regexValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexValuesInput`<sup>Optional</sup> <a name="regexValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.regexValuesInput"></a>

```typescript
public readonly regexValuesInput: string[];
```

- *Type:* string[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `regexValues`<sup>Required</sup> <a name="regexValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.regexValues"></a>

```typescript
public readonly regexValues: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValues` <a name="putValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.putValues"></a>

```typescript
public putValues(value: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.putValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>[]

---

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.valuesInput">valuesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.values"></a>

```typescript
public readonly values: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>[]

---


### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a>

---


### Elasticloadbalancingv2ListenerRuleTagsList <a name="Elasticloadbalancingv2ListenerRuleTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>[]

---


### Elasticloadbalancingv2ListenerRuleTagsOutputReference <a name="Elasticloadbalancingv2ListenerRuleTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.putRewrites">putRewrites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resetRewrites">resetRewrites</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRewrites` <a name="putRewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.putRewrites"></a>

```typescript
public putRewrites(value: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.putRewrites.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>[]

---

##### `resetRewrites` <a name="resetRewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resetRewrites"></a>

```typescript
public resetRewrites(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.rewrites">rewrites</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.rewritesInput">rewritesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rewrites`<sup>Required</sup> <a name="rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.rewrites"></a>

```typescript
public readonly rewrites: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList</a>

---

##### `rewritesInput`<sup>Optional</sup> <a name="rewritesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.rewritesInput"></a>

```typescript
public readonly rewritesInput: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>[]

---


### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resetReplace">resetReplace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetReplace` <a name="resetReplace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resetReplace"></a>

```typescript
public resetReplace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.replaceInput">replaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.replace">replace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `replaceInput`<sup>Optional</sup> <a name="replaceInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.replaceInput"></a>

```typescript
public readonly replaceInput: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.replace"></a>

```typescript
public readonly replace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsList <a name="Elasticloadbalancingv2ListenerRuleTransformsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerRuleTransformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleTransforms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>[]

---


### Elasticloadbalancingv2ListenerRuleTransformsOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putHostHeaderRewriteConfig">putHostHeaderRewriteConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putUrlRewriteConfig">putUrlRewriteConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetHostHeaderRewriteConfig">resetHostHeaderRewriteConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetUrlRewriteConfig">resetUrlRewriteConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostHeaderRewriteConfig` <a name="putHostHeaderRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putHostHeaderRewriteConfig"></a>

```typescript
public putHostHeaderRewriteConfig(value: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putHostHeaderRewriteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a>

---

##### `putUrlRewriteConfig` <a name="putUrlRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putUrlRewriteConfig"></a>

```typescript
public putUrlRewriteConfig(value: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putUrlRewriteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a>

---

##### `resetHostHeaderRewriteConfig` <a name="resetHostHeaderRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetHostHeaderRewriteConfig"></a>

```typescript
public resetHostHeaderRewriteConfig(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUrlRewriteConfig` <a name="resetUrlRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetUrlRewriteConfig"></a>

```typescript
public resetUrlRewriteConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.hostHeaderRewriteConfig">hostHeaderRewriteConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.urlRewriteConfig">urlRewriteConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.hostHeaderRewriteConfigInput">hostHeaderRewriteConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.urlRewriteConfigInput">urlRewriteConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostHeaderRewriteConfig`<sup>Required</sup> <a name="hostHeaderRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.hostHeaderRewriteConfig"></a>

```typescript
public readonly hostHeaderRewriteConfig: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference</a>

---

##### `urlRewriteConfig`<sup>Required</sup> <a name="urlRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.urlRewriteConfig"></a>

```typescript
public readonly urlRewriteConfig: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference</a>

---

##### `hostHeaderRewriteConfigInput`<sup>Optional</sup> <a name="hostHeaderRewriteConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.hostHeaderRewriteConfigInput"></a>

```typescript
public readonly hostHeaderRewriteConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `urlRewriteConfigInput`<sup>Optional</sup> <a name="urlRewriteConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.urlRewriteConfigInput"></a>

```typescript
public readonly urlRewriteConfigInput: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleTransforms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.putRewrites">putRewrites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resetRewrites">resetRewrites</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRewrites` <a name="putRewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.putRewrites"></a>

```typescript
public putRewrites(value: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.putRewrites.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>[]

---

##### `resetRewrites` <a name="resetRewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resetRewrites"></a>

```typescript
public resetRewrites(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.rewrites">rewrites</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.rewritesInput">rewritesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rewrites`<sup>Required</sup> <a name="rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.rewrites"></a>

```typescript
public readonly rewrites: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList</a>

---

##### `rewritesInput`<sup>Optional</sup> <a name="rewritesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.rewritesInput"></a>

```typescript
public readonly rewritesInput: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>[]

---


### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2ListenerRule } from '@cdktn/provider-awscc'

new elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resetReplace">resetReplace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetReplace` <a name="resetReplace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resetReplace"></a>

```typescript
public resetReplace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.replaceInput">replaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.replace">replace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `replaceInput`<sup>Optional</sup> <a name="replaceInput" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.replaceInput"></a>

```typescript
public readonly replaceInput: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.replace"></a>

```typescript
public readonly replace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>

---




# `observabilityadminOrganizationTelemetryRule` Submodule <a name="`observabilityadminOrganizationTelemetryRule` Submodule" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminOrganizationTelemetryRule <a name="ObservabilityadminOrganizationTelemetryRule" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule awscc_observabilityadmin_organization_telemetry_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule(scope: Construct, id: string, config: ObservabilityadminOrganizationTelemetryRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig">ObservabilityadminOrganizationTelemetryRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig">ObservabilityadminOrganizationTelemetryRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.putRule"></a>

```typescript
public putRule(value: ObservabilityadminOrganizationTelemetryRuleRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule">ObservabilityadminOrganizationTelemetryRuleRule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.putTags"></a>

```typescript
public putTags(value: IResolvable | ObservabilityadminOrganizationTelemetryRuleTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags">ObservabilityadminOrganizationTelemetryRuleTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityadminOrganizationTelemetryRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isConstruct"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isTerraformElement"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isTerraformResource"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.generateConfigForImport"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ObservabilityadminOrganizationTelemetryRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityadminOrganizationTelemetryRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityadminOrganizationTelemetryRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminOrganizationTelemetryRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.regionStatuses">regionStatuses</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList">ObservabilityadminOrganizationTelemetryRuleRegionStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList">ObservabilityadminOrganizationTelemetryRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule">ObservabilityadminOrganizationTelemetryRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags">ObservabilityadminOrganizationTelemetryRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `regionStatuses`<sup>Required</sup> <a name="regionStatuses" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.regionStatuses"></a>

```typescript
public readonly regionStatuses: ObservabilityadminOrganizationTelemetryRuleRegionStatusesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList">ObservabilityadminOrganizationTelemetryRuleRegionStatusesList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.rule"></a>

```typescript
public readonly rule: ObservabilityadminOrganizationTelemetryRuleRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleOutputReference</a>

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.tags"></a>

```typescript
public readonly tags: ObservabilityadminOrganizationTelemetryRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList">ObservabilityadminOrganizationTelemetryRuleTagsList</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule">ObservabilityadminOrganizationTelemetryRuleRule</a>

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags">ObservabilityadminOrganizationTelemetryRuleTags</a>[]

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminOrganizationTelemetryRuleConfig <a name="ObservabilityadminOrganizationTelemetryRuleConfig" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleConfig: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule">ObservabilityadminOrganizationTelemetryRuleRule</a></code> | The telemetry rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.ruleName">ruleName</a></code> | <code>string</code> | The name of the organization telemetry rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags">ObservabilityadminOrganizationTelemetryRuleTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.rule"></a>

```typescript
public readonly rule: ObservabilityadminOrganizationTelemetryRuleRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule">ObservabilityadminOrganizationTelemetryRuleRule</a>

The telemetry rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#rule ObservabilityadminOrganizationTelemetryRule#rule}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name of the organization telemetry rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#rule_name ObservabilityadminOrganizationTelemetryRule#rule_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ObservabilityadminOrganizationTelemetryRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags">ObservabilityadminOrganizationTelemetryRuleTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#tags ObservabilityadminOrganizationTelemetryRule#tags}

---

### ObservabilityadminOrganizationTelemetryRuleRegionStatuses <a name="ObservabilityadminOrganizationTelemetryRuleRegionStatuses" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatuses.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRegionStatuses: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatuses = { ... }
```


### ObservabilityadminOrganizationTelemetryRuleRule <a name="ObservabilityadminOrganizationTelemetryRuleRule" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRule: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.resourceType">resourceType</a></code> | <code>string</code> | Resource Type associated with the Organization Telemetry Rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.telemetryType">telemetryType</a></code> | <code>string</code> | Telemetry Type associated with the Organization Telemetry Rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.allowFieldUpdates">allowFieldUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, configuration drift in managed telemetry resources will be detected and remediated for resource-level fields. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.allRegions">allRegions</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, the rule is replicated to all supported regions. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.destinationConfiguration">destinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration</a></code> | The destination configuration for telemetry data. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.regions">regions</a></code> | <code>string[]</code> | List of AWS region codes where the rule should be replicated. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.scope">scope</a></code> | <code>string</code> | Selection Criteria on scope level for rule application. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.selectionCriteria">selectionCriteria</a></code> | <code>string</code> | Selection Criteria on resource level for rule application. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.telemetrySourceTypes">telemetrySourceTypes</a></code> | <code>string[]</code> | The telemetry source types for a telemetry rule. |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Resource Type associated with the Organization Telemetry Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#resource_type ObservabilityadminOrganizationTelemetryRule#resource_type}

---

##### `telemetryType`<sup>Required</sup> <a name="telemetryType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.telemetryType"></a>

```typescript
public readonly telemetryType: string;
```

- *Type:* string

Telemetry Type associated with the Organization Telemetry Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#telemetry_type ObservabilityadminOrganizationTelemetryRule#telemetry_type}

---

##### `allowFieldUpdates`<sup>Optional</sup> <a name="allowFieldUpdates" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.allowFieldUpdates"></a>

```typescript
public readonly allowFieldUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, configuration drift in managed telemetry resources will be detected and remediated for resource-level fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#allow_field_updates ObservabilityadminOrganizationTelemetryRule#allow_field_updates}

---

##### `allRegions`<sup>Optional</sup> <a name="allRegions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.allRegions"></a>

```typescript
public readonly allRegions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, the rule is replicated to all supported regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#all_regions ObservabilityadminOrganizationTelemetryRule#all_regions}

---

##### `destinationConfiguration`<sup>Optional</sup> <a name="destinationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.destinationConfiguration"></a>

```typescript
public readonly destinationConfiguration: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration</a>

The destination configuration for telemetry data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#destination_configuration ObservabilityadminOrganizationTelemetryRule#destination_configuration}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

List of AWS region codes where the rule should be replicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#regions ObservabilityadminOrganizationTelemetryRule#regions}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Selection Criteria on scope level for rule application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#scope ObservabilityadminOrganizationTelemetryRule#scope}

---

##### `selectionCriteria`<sup>Optional</sup> <a name="selectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.selectionCriteria"></a>

```typescript
public readonly selectionCriteria: string;
```

- *Type:* string

Selection Criteria on resource level for rule application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#selection_criteria ObservabilityadminOrganizationTelemetryRule#selection_criteria}

---

##### `telemetrySourceTypes`<sup>Optional</sup> <a name="telemetrySourceTypes" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.telemetrySourceTypes"></a>

```typescript
public readonly telemetrySourceTypes: string[];
```

- *Type:* string[]

The telemetry source types for a telemetry rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#telemetry_source_types ObservabilityadminOrganizationTelemetryRule#telemetry_source_types}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.cloudtrailParameters">cloudtrailParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a></code> | Telemetry parameters for Cloudtrail. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.destinationPattern">destinationPattern</a></code> | <code>string</code> | Pattern for telemetry data destination. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.destinationType">destinationType</a></code> | <code>string</code> | Type of telemetry destination. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.elbLoadBalancerLoggingParameters">elbLoadBalancerLoggingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a></code> | Telemetry parameters for ELB/NLB Load Balancer Logs. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.logDeliveryParameters">logDeliveryParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a></code> | Parameters for log delivery configuration. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Number of days to retain the telemetry data in the specified destination. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.vpcFlowLogParameters">vpcFlowLogParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a></code> | Telemetry parameters for VPC Flow logs. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.wafLoggingParameters">wafLoggingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a></code> | Telemetry parameters for WAF v2 Web ACL. |

---

##### `cloudtrailParameters`<sup>Optional</sup> <a name="cloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.cloudtrailParameters"></a>

```typescript
public readonly cloudtrailParameters: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a>

Telemetry parameters for Cloudtrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#cloudtrail_parameters ObservabilityadminOrganizationTelemetryRule#cloudtrail_parameters}

---

##### `destinationPattern`<sup>Optional</sup> <a name="destinationPattern" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.destinationPattern"></a>

```typescript
public readonly destinationPattern: string;
```

- *Type:* string

Pattern for telemetry data destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#destination_pattern ObservabilityadminOrganizationTelemetryRule#destination_pattern}

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Type of telemetry destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#destination_type ObservabilityadminOrganizationTelemetryRule#destination_type}

---

##### `elbLoadBalancerLoggingParameters`<sup>Optional</sup> <a name="elbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.elbLoadBalancerLoggingParameters"></a>

```typescript
public readonly elbLoadBalancerLoggingParameters: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a>

Telemetry parameters for ELB/NLB Load Balancer Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#elb_load_balancer_logging_parameters ObservabilityadminOrganizationTelemetryRule#elb_load_balancer_logging_parameters}

---

##### `logDeliveryParameters`<sup>Optional</sup> <a name="logDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.logDeliveryParameters"></a>

```typescript
public readonly logDeliveryParameters: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a>

Parameters for log delivery configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#log_delivery_parameters ObservabilityadminOrganizationTelemetryRule#log_delivery_parameters}

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Number of days to retain the telemetry data in the specified destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#retention_in_days ObservabilityadminOrganizationTelemetryRule#retention_in_days}

---

##### `vpcFlowLogParameters`<sup>Optional</sup> <a name="vpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.vpcFlowLogParameters"></a>

```typescript
public readonly vpcFlowLogParameters: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a>

Telemetry parameters for VPC Flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#vpc_flow_log_parameters ObservabilityadminOrganizationTelemetryRule#vpc_flow_log_parameters}

---

##### `wafLoggingParameters`<sup>Optional</sup> <a name="wafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.wafLoggingParameters"></a>

```typescript
public readonly wafLoggingParameters: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a>

Telemetry parameters for WAF v2 Web ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#waf_logging_parameters ObservabilityadminOrganizationTelemetryRule#waf_logging_parameters}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters.property.advancedEventSelectors">advancedEventSelectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>[]</code> | Create fine-grained selectors for AWS CloudTrail management and data. |

---

##### `advancedEventSelectors`<sup>Optional</sup> <a name="advancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters.property.advancedEventSelectors"></a>

```typescript
public readonly advancedEventSelectors: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>[]

Create fine-grained selectors for AWS CloudTrail management and data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#advanced_event_selectors ObservabilityadminOrganizationTelemetryRule#advanced_event_selectors}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.property.fieldSelectors">fieldSelectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>[]</code> | Contains all selector statements in an advanced event selector. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.property.name">name</a></code> | <code>string</code> | An optional descriptive name for the advanced event selector. |

---

##### `fieldSelectors`<sup>Optional</sup> <a name="fieldSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.property.fieldSelectors"></a>

```typescript
public readonly fieldSelectors: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>[]

Contains all selector statements in an advanced event selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#field_selectors ObservabilityadminOrganizationTelemetryRule#field_selectors}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

An optional descriptive name for the advanced event selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#name ObservabilityadminOrganizationTelemetryRule#name}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.endsWith">endsWith</a></code> | <code>string[]</code> | An operator that includes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.equalTo">equalTo</a></code> | <code>string[]</code> | An operator that includes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.field">field</a></code> | <code>string</code> | A field in a CloudTrail event record on which to filter events to be logged. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notEndsWith">notEndsWith</a></code> | <code>string[]</code> | An operator that excludes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notEquals">notEquals</a></code> | <code>string[]</code> | An operator that excludes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notStartsWith">notStartsWith</a></code> | <code>string[]</code> | An operator that excludes events that match the first few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.startsWith">startsWith</a></code> | <code>string[]</code> | An operator that includes events that match the first few characters of the event record field specified as the value of Field. |

---

##### `endsWith`<sup>Optional</sup> <a name="endsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.endsWith"></a>

```typescript
public readonly endsWith: string[];
```

- *Type:* string[]

An operator that includes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#ends_with ObservabilityadminOrganizationTelemetryRule#ends_with}

---

##### `equalTo`<sup>Optional</sup> <a name="equalTo" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

An operator that includes events that match the exact value of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#equals ObservabilityadminOrganizationTelemetryRule#equals}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

A field in a CloudTrail event record on which to filter events to be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#field ObservabilityadminOrganizationTelemetryRule#field}

---

##### `notEndsWith`<sup>Optional</sup> <a name="notEndsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notEndsWith"></a>

```typescript
public readonly notEndsWith: string[];
```

- *Type:* string[]

An operator that excludes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#not_ends_with ObservabilityadminOrganizationTelemetryRule#not_ends_with}

---

##### `notEquals`<sup>Optional</sup> <a name="notEquals" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notEquals"></a>

```typescript
public readonly notEquals: string[];
```

- *Type:* string[]

An operator that excludes events that match the exact value of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#not_equals ObservabilityadminOrganizationTelemetryRule#not_equals}

---

##### `notStartsWith`<sup>Optional</sup> <a name="notStartsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notStartsWith"></a>

```typescript
public readonly notStartsWith: string[];
```

- *Type:* string[]

An operator that excludes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#not_starts_with ObservabilityadminOrganizationTelemetryRule#not_starts_with}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.startsWith"></a>

```typescript
public readonly startsWith: string[];
```

- *Type:* string[]

An operator that includes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#starts_with ObservabilityadminOrganizationTelemetryRule#starts_with}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | A delimiter to delineate log fields. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.property.outputFormat">outputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#output_format ObservabilityadminOrganizationTelemetryRule#output_format}. |

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

A delimiter to delineate log fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#field_delimiter ObservabilityadminOrganizationTelemetryRule#field_delimiter}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#output_format ObservabilityadminOrganizationTelemetryRule#output_format}.

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters.property.logTypes">logTypes</a></code> | <code>string[]</code> | Types of logs to deliver. |

---

##### `logTypes`<sup>Optional</sup> <a name="logTypes" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters.property.logTypes"></a>

```typescript
public readonly logTypes: string[];
```

- *Type:* string[]

Types of logs to deliver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#log_types ObservabilityadminOrganizationTelemetryRule#log_types}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.logFormat">logFormat</a></code> | <code>string</code> | The fields to include in the flow log record. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.maxAggregationInterval">maxAggregationInterval</a></code> | <code>number</code> | The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.trafficType">trafficType</a></code> | <code>string</code> | The type of traffic captured for the flow log. Default is ALL. |

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

The fields to include in the flow log record.

If you omit this parameter, the flow log is created using the default format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#log_format ObservabilityadminOrganizationTelemetryRule#log_format}

---

##### `maxAggregationInterval`<sup>Optional</sup> <a name="maxAggregationInterval" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.maxAggregationInterval"></a>

```typescript
public readonly maxAggregationInterval: number;
```

- *Type:* number

The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record.

Default is 600s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#max_aggregation_interval ObservabilityadminOrganizationTelemetryRule#max_aggregation_interval}

---

##### `trafficType`<sup>Optional</sup> <a name="trafficType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.trafficType"></a>

```typescript
public readonly trafficType: string;
```

- *Type:* string

The type of traffic captured for the flow log. Default is ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#traffic_type ObservabilityadminOrganizationTelemetryRule#traffic_type}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.loggingFilter">loggingFilter</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a></code> | Default handling for logs that don't match any of the specified filtering conditions. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.logType">logType</a></code> | <code>string</code> | The type of logs to generate for WAF. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.redactedFields">redactedFields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>[]</code> | Fields not to be included in the logs. |

---

##### `loggingFilter`<sup>Optional</sup> <a name="loggingFilter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.loggingFilter"></a>

```typescript
public readonly loggingFilter: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a>

Default handling for logs that don't match any of the specified filtering conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#logging_filter ObservabilityadminOrganizationTelemetryRule#logging_filter}

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

The type of logs to generate for WAF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#log_type ObservabilityadminOrganizationTelemetryRule#log_type}

---

##### `redactedFields`<sup>Optional</sup> <a name="redactedFields" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.redactedFields"></a>

```typescript
public readonly redactedFields: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>[]

Fields not to be included in the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#redacted_fields ObservabilityadminOrganizationTelemetryRule#redacted_fields}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.property.defaultBehavior">defaultBehavior</a></code> | <code>string</code> | The behavior required of the filter. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.property.filters">filters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>[]</code> | A list of filters to be applied. |

---

##### `defaultBehavior`<sup>Optional</sup> <a name="defaultBehavior" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.property.defaultBehavior"></a>

```typescript
public readonly defaultBehavior: string;
```

- *Type:* string

The behavior required of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#default_behavior ObservabilityadminOrganizationTelemetryRule#default_behavior}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.property.filters"></a>

```typescript
public readonly filters: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>[]

A list of filters to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#filters ObservabilityadminOrganizationTelemetryRule#filters}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.behavior">behavior</a></code> | <code>string</code> | The behavior required of the filter. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>[]</code> | A list of conditions for a filter. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.requirement">requirement</a></code> | <code>string</code> | The requirement portion of the filter. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

The behavior required of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#behavior ObservabilityadminOrganizationTelemetryRule#behavior}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>[]

A list of conditions for a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#conditions ObservabilityadminOrganizationTelemetryRule#conditions}

---

##### `requirement`<sup>Optional</sup> <a name="requirement" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.requirement"></a>

```typescript
public readonly requirement: string;
```

- *Type:* string

The requirement portion of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#requirement ObservabilityadminOrganizationTelemetryRule#requirement}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.property.actionCondition">actionCondition</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a></code> | The condition of the action desired in the filter. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.property.labelNameCondition">labelNameCondition</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a></code> | The label name of the condition. |

---

##### `actionCondition`<sup>Optional</sup> <a name="actionCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.property.actionCondition"></a>

```typescript
public readonly actionCondition: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a>

The condition of the action desired in the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#action_condition ObservabilityadminOrganizationTelemetryRule#action_condition}

---

##### `labelNameCondition`<sup>Optional</sup> <a name="labelNameCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.property.labelNameCondition"></a>

```typescript
public readonly labelNameCondition: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a>

The label name of the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#label_name_condition ObservabilityadminOrganizationTelemetryRule#label_name_condition}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition.property.action">action</a></code> | <code>string</code> | The enumerated action to take. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The enumerated action to take.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#action ObservabilityadminOrganizationTelemetryRule#action}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition.property.labelName">labelName</a></code> | <code>string</code> | The label name of the condition. |

---

##### `labelName`<sup>Optional</sup> <a name="labelName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition.property.labelName"></a>

```typescript
public readonly labelName: string;
```

- *Type:* string

The label name of the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#label_name ObservabilityadminOrganizationTelemetryRule#label_name}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.method">method</a></code> | <code>string</code> | The method with which to match this rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.queryString">queryString</a></code> | <code>string</code> | The query string to find the resource to match this field to. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.singleHeader">singleHeader</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a></code> | Header for the field to match. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.uriPath">uriPath</a></code> | <code>string</code> | This is the URI path to match this rule to. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

The method with which to match this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#method ObservabilityadminOrganizationTelemetryRule#method}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

The query string to find the resource to match this field to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#query_string ObservabilityadminOrganizationTelemetryRule#query_string}

---

##### `singleHeader`<sup>Optional</sup> <a name="singleHeader" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.singleHeader"></a>

```typescript
public readonly singleHeader: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a>

Header for the field to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#single_header ObservabilityadminOrganizationTelemetryRule#single_header}

---

##### `uriPath`<sup>Optional</sup> <a name="uriPath" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.uriPath"></a>

```typescript
public readonly uriPath: string;
```

- *Type:* string

This is the URI path to match this rule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#uri_path ObservabilityadminOrganizationTelemetryRule#uri_path}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader.property.name">name</a></code> | <code>string</code> | The name of the header. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#name ObservabilityadminOrganizationTelemetryRule#name}

---

### ObservabilityadminOrganizationTelemetryRuleTags <a name="ObservabilityadminOrganizationTelemetryRuleTags" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

const observabilityadminOrganizationTelemetryRuleTags: observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#key ObservabilityadminOrganizationTelemetryRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#value ObservabilityadminOrganizationTelemetryRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminOrganizationTelemetryRuleRegionStatusesList <a name="ObservabilityadminOrganizationTelemetryRuleRegionStatusesList" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.get"></a>

```typescript
public get(index: number): ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatuses">ObservabilityadminOrganizationTelemetryRuleRegionStatuses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObservabilityadminOrganizationTelemetryRuleRegionStatuses;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatuses">ObservabilityadminOrganizationTelemetryRuleRegionStatuses</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.get"></a>

```typescript
public get(index: number): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>[]

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith">resetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo">resetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith">resetNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals">resetNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith">resetNotStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndsWith` <a name="resetEndsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith"></a>

```typescript
public resetEndsWith(): void
```

##### `resetEqualTo` <a name="resetEqualTo" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo"></a>

```typescript
public resetEqualTo(): void
```

##### `resetField` <a name="resetField" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetField"></a>

```typescript
public resetField(): void
```

##### `resetNotEndsWith` <a name="resetNotEndsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith"></a>

```typescript
public resetNotEndsWith(): void
```

##### `resetNotEquals` <a name="resetNotEquals" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals"></a>

```typescript
public resetNotEquals(): void
```

##### `resetNotStartsWith` <a name="resetNotStartsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith"></a>

```typescript
public resetNotStartsWith(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput">endsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput">equalToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput">notEndsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput">notEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput">notStartsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput">startsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith">endsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo">equalTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith">notEndsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals">notEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith">notStartsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith">startsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endsWithInput`<sup>Optional</sup> <a name="endsWithInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput"></a>

```typescript
public readonly endsWithInput: string[];
```

- *Type:* string[]

---

##### `equalToInput`<sup>Optional</sup> <a name="equalToInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput"></a>

```typescript
public readonly equalToInput: string[];
```

- *Type:* string[]

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `notEndsWithInput`<sup>Optional</sup> <a name="notEndsWithInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput"></a>

```typescript
public readonly notEndsWithInput: string[];
```

- *Type:* string[]

---

##### `notEqualsInput`<sup>Optional</sup> <a name="notEqualsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput"></a>

```typescript
public readonly notEqualsInput: string[];
```

- *Type:* string[]

---

##### `notStartsWithInput`<sup>Optional</sup> <a name="notStartsWithInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput"></a>

```typescript
public readonly notStartsWithInput: string[];
```

- *Type:* string[]

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string[];
```

- *Type:* string[]

---

##### `endsWith`<sup>Required</sup> <a name="endsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith"></a>

```typescript
public readonly endsWith: string[];
```

- *Type:* string[]

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `notEndsWith`<sup>Required</sup> <a name="notEndsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith"></a>

```typescript
public readonly notEndsWith: string[];
```

- *Type:* string[]

---

##### `notEquals`<sup>Required</sup> <a name="notEquals" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals"></a>

```typescript
public readonly notEquals: string[];
```

- *Type:* string[]

---

##### `notStartsWith`<sup>Required</sup> <a name="notStartsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith"></a>

```typescript
public readonly notStartsWith: string[];
```

- *Type:* string[]

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith"></a>

```typescript
public readonly startsWith: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.get"></a>

```typescript
public get(index: number): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>[]

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.putFieldSelectors">putFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resetFieldSelectors">resetFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldSelectors` <a name="putFieldSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.putFieldSelectors"></a>

```typescript
public putFieldSelectors(value: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.putFieldSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>[]

---

##### `resetFieldSelectors` <a name="resetFieldSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resetFieldSelectors"></a>

```typescript
public resetFieldSelectors(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fieldSelectors">fieldSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput">fieldSelectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldSelectors`<sup>Required</sup> <a name="fieldSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fieldSelectors"></a>

```typescript
public readonly fieldSelectors: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList</a>

---

##### `fieldSelectorsInput`<sup>Optional</sup> <a name="fieldSelectorsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput"></a>

```typescript
public readonly fieldSelectorsInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.putAdvancedEventSelectors">putAdvancedEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resetAdvancedEventSelectors">resetAdvancedEventSelectors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedEventSelectors` <a name="putAdvancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.putAdvancedEventSelectors"></a>

```typescript
public putAdvancedEventSelectors(value: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.putAdvancedEventSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>[]

---

##### `resetAdvancedEventSelectors` <a name="resetAdvancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resetAdvancedEventSelectors"></a>

```typescript
public resetAdvancedEventSelectors(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.advancedEventSelectors">advancedEventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.advancedEventSelectorsInput">advancedEventSelectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedEventSelectors`<sup>Required</sup> <a name="advancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.advancedEventSelectors"></a>

```typescript
public readonly advancedEventSelectors: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList</a>

---

##### `advancedEventSelectorsInput`<sup>Optional</sup> <a name="advancedEventSelectorsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.advancedEventSelectorsInput"></a>

```typescript
public readonly advancedEventSelectorsInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resetFieldDelimiter"></a>

```typescript
public resetFieldDelimiter(): void
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resetOutputFormat"></a>

```typescript
public resetOutputFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fieldDelimiterInput"></a>

```typescript
public readonly fieldDelimiterInput: string;
```

- *Type:* string

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resetLogTypes">resetLogTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogTypes` <a name="resetLogTypes" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resetLogTypes"></a>

```typescript
public resetLogTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.logTypesInput">logTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.logTypes">logTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logTypesInput`<sup>Optional</sup> <a name="logTypesInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.logTypesInput"></a>

```typescript
public readonly logTypesInput: string[];
```

- *Type:* string[]

---

##### `logTypes`<sup>Required</sup> <a name="logTypes" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.logTypes"></a>

```typescript
public readonly logTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putCloudtrailParameters">putCloudtrailParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putElbLoadBalancerLoggingParameters">putElbLoadBalancerLoggingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putLogDeliveryParameters">putLogDeliveryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putVpcFlowLogParameters">putVpcFlowLogParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putWafLoggingParameters">putWafLoggingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetCloudtrailParameters">resetCloudtrailParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetDestinationPattern">resetDestinationPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetElbLoadBalancerLoggingParameters">resetElbLoadBalancerLoggingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetLogDeliveryParameters">resetLogDeliveryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetVpcFlowLogParameters">resetVpcFlowLogParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetWafLoggingParameters">resetWafLoggingParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudtrailParameters` <a name="putCloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putCloudtrailParameters"></a>

```typescript
public putCloudtrailParameters(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putCloudtrailParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a>

---

##### `putElbLoadBalancerLoggingParameters` <a name="putElbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putElbLoadBalancerLoggingParameters"></a>

```typescript
public putElbLoadBalancerLoggingParameters(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putElbLoadBalancerLoggingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a>

---

##### `putLogDeliveryParameters` <a name="putLogDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putLogDeliveryParameters"></a>

```typescript
public putLogDeliveryParameters(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putLogDeliveryParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a>

---

##### `putVpcFlowLogParameters` <a name="putVpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putVpcFlowLogParameters"></a>

```typescript
public putVpcFlowLogParameters(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putVpcFlowLogParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a>

---

##### `putWafLoggingParameters` <a name="putWafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putWafLoggingParameters"></a>

```typescript
public putWafLoggingParameters(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putWafLoggingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a>

---

##### `resetCloudtrailParameters` <a name="resetCloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetCloudtrailParameters"></a>

```typescript
public resetCloudtrailParameters(): void
```

##### `resetDestinationPattern` <a name="resetDestinationPattern" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetDestinationPattern"></a>

```typescript
public resetDestinationPattern(): void
```

##### `resetDestinationType` <a name="resetDestinationType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetDestinationType"></a>

```typescript
public resetDestinationType(): void
```

##### `resetElbLoadBalancerLoggingParameters` <a name="resetElbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetElbLoadBalancerLoggingParameters"></a>

```typescript
public resetElbLoadBalancerLoggingParameters(): void
```

##### `resetLogDeliveryParameters` <a name="resetLogDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetLogDeliveryParameters"></a>

```typescript
public resetLogDeliveryParameters(): void
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetRetentionInDays"></a>

```typescript
public resetRetentionInDays(): void
```

##### `resetVpcFlowLogParameters` <a name="resetVpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetVpcFlowLogParameters"></a>

```typescript
public resetVpcFlowLogParameters(): void
```

##### `resetWafLoggingParameters` <a name="resetWafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetWafLoggingParameters"></a>

```typescript
public resetWafLoggingParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.cloudtrailParameters">cloudtrailParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.elbLoadBalancerLoggingParameters">elbLoadBalancerLoggingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.logDeliveryParameters">logDeliveryParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.vpcFlowLogParameters">vpcFlowLogParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.wafLoggingParameters">wafLoggingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.cloudtrailParametersInput">cloudtrailParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationPatternInput">destinationPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.elbLoadBalancerLoggingParametersInput">elbLoadBalancerLoggingParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.logDeliveryParametersInput">logDeliveryParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.vpcFlowLogParametersInput">vpcFlowLogParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.wafLoggingParametersInput">wafLoggingParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationPattern">destinationPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudtrailParameters`<sup>Required</sup> <a name="cloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.cloudtrailParameters"></a>

```typescript
public readonly cloudtrailParameters: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference</a>

---

##### `elbLoadBalancerLoggingParameters`<sup>Required</sup> <a name="elbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.elbLoadBalancerLoggingParameters"></a>

```typescript
public readonly elbLoadBalancerLoggingParameters: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference</a>

---

##### `logDeliveryParameters`<sup>Required</sup> <a name="logDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.logDeliveryParameters"></a>

```typescript
public readonly logDeliveryParameters: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference</a>

---

##### `vpcFlowLogParameters`<sup>Required</sup> <a name="vpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.vpcFlowLogParameters"></a>

```typescript
public readonly vpcFlowLogParameters: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference</a>

---

##### `wafLoggingParameters`<sup>Required</sup> <a name="wafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.wafLoggingParameters"></a>

```typescript
public readonly wafLoggingParameters: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference</a>

---

##### `cloudtrailParametersInput`<sup>Optional</sup> <a name="cloudtrailParametersInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.cloudtrailParametersInput"></a>

```typescript
public readonly cloudtrailParametersInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a>

---

##### `destinationPatternInput`<sup>Optional</sup> <a name="destinationPatternInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationPatternInput"></a>

```typescript
public readonly destinationPatternInput: string;
```

- *Type:* string

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `elbLoadBalancerLoggingParametersInput`<sup>Optional</sup> <a name="elbLoadBalancerLoggingParametersInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.elbLoadBalancerLoggingParametersInput"></a>

```typescript
public readonly elbLoadBalancerLoggingParametersInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a>

---

##### `logDeliveryParametersInput`<sup>Optional</sup> <a name="logDeliveryParametersInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.logDeliveryParametersInput"></a>

```typescript
public readonly logDeliveryParametersInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a>

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `vpcFlowLogParametersInput`<sup>Optional</sup> <a name="vpcFlowLogParametersInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.vpcFlowLogParametersInput"></a>

```typescript
public readonly vpcFlowLogParametersInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a>

---

##### `wafLoggingParametersInput`<sup>Optional</sup> <a name="wafLoggingParametersInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.wafLoggingParametersInput"></a>

```typescript
public readonly wafLoggingParametersInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a>

---

##### `destinationPattern`<sup>Required</sup> <a name="destinationPattern" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationPattern"></a>

```typescript
public readonly destinationPattern: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetLogFormat">resetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetMaxAggregationInterval">resetMaxAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetTrafficType">resetTrafficType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetLogFormat"></a>

```typescript
public resetLogFormat(): void
```

##### `resetMaxAggregationInterval` <a name="resetMaxAggregationInterval" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetMaxAggregationInterval"></a>

```typescript
public resetMaxAggregationInterval(): void
```

##### `resetTrafficType` <a name="resetTrafficType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetTrafficType"></a>

```typescript
public resetTrafficType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.maxAggregationIntervalInput">maxAggregationIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.trafficTypeInput">trafficTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.maxAggregationInterval">maxAggregationInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.trafficType">trafficType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.logFormatInput"></a>

```typescript
public readonly logFormatInput: string;
```

- *Type:* string

---

##### `maxAggregationIntervalInput`<sup>Optional</sup> <a name="maxAggregationIntervalInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.maxAggregationIntervalInput"></a>

```typescript
public readonly maxAggregationIntervalInput: number;
```

- *Type:* number

---

##### `trafficTypeInput`<sup>Optional</sup> <a name="trafficTypeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.trafficTypeInput"></a>

```typescript
public readonly trafficTypeInput: string;
```

- *Type:* string

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `maxAggregationInterval`<sup>Required</sup> <a name="maxAggregationInterval" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.maxAggregationInterval"></a>

```typescript
public readonly maxAggregationInterval: number;
```

- *Type:* number

---

##### `trafficType`<sup>Required</sup> <a name="trafficType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.trafficType"></a>

```typescript
public readonly trafficType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resetAction">resetAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resetLabelName">resetLabelName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabelName` <a name="resetLabelName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resetLabelName"></a>

```typescript
public resetLabelName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelNameInput">labelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName">labelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelNameInput`<sup>Optional</sup> <a name="labelNameInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelNameInput"></a>

```typescript
public readonly labelNameInput: string;
```

- *Type:* string

---

##### `labelName`<sup>Required</sup> <a name="labelName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName"></a>

```typescript
public readonly labelName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.get"></a>

```typescript
public get(index: number): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>[]

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putActionCondition">putActionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition">putLabelNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resetActionCondition">resetActionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resetLabelNameCondition">resetLabelNameCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActionCondition` <a name="putActionCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putActionCondition"></a>

```typescript
public putActionCondition(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putActionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a>

---

##### `putLabelNameCondition` <a name="putLabelNameCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition"></a>

```typescript
public putLabelNameCondition(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a>

---

##### `resetActionCondition` <a name="resetActionCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resetActionCondition"></a>

```typescript
public resetActionCondition(): void
```

##### `resetLabelNameCondition` <a name="resetLabelNameCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resetLabelNameCondition"></a>

```typescript
public resetLabelNameCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.actionCondition">actionCondition</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition">labelNameCondition</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.actionConditionInput">actionConditionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.labelNameConditionInput">labelNameConditionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionCondition`<sup>Required</sup> <a name="actionCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.actionCondition"></a>

```typescript
public readonly actionCondition: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference</a>

---

##### `labelNameCondition`<sup>Required</sup> <a name="labelNameCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition"></a>

```typescript
public readonly labelNameCondition: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a>

---

##### `actionConditionInput`<sup>Optional</sup> <a name="actionConditionInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.actionConditionInput"></a>

```typescript
public readonly actionConditionInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a>

---

##### `labelNameConditionInput`<sup>Optional</sup> <a name="labelNameConditionInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.labelNameConditionInput"></a>

```typescript
public readonly labelNameConditionInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.get"></a>

```typescript
public get(index: number): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>[]

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetBehavior">resetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetRequirement">resetRequirement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>[]

---

##### `resetBehavior` <a name="resetBehavior" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetBehavior"></a>

```typescript
public resetBehavior(): void
```

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetRequirement` <a name="resetRequirement" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetRequirement"></a>

```typescript
public resetRequirement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.requirementInput">requirementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.requirement">requirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.conditions"></a>

```typescript
public readonly conditions: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList</a>

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>[]

---

##### `requirementInput`<sup>Optional</sup> <a name="requirementInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.requirementInput"></a>

```typescript
public readonly requirementInput: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.requirement"></a>

```typescript
public readonly requirement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resetDefaultBehavior">resetDefaultBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resetFilters">resetFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilters` <a name="putFilters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.putFilters"></a>

```typescript
public putFilters(value: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>[]

---

##### `resetDefaultBehavior` <a name="resetDefaultBehavior" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resetDefaultBehavior"></a>

```typescript
public resetDefaultBehavior(): void
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resetFilters"></a>

```typescript
public resetFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.defaultBehaviorInput">defaultBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.filtersInput">filtersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.defaultBehavior">defaultBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.filters"></a>

```typescript
public readonly filters: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList</a>

---

##### `defaultBehaviorInput`<sup>Optional</sup> <a name="defaultBehaviorInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.defaultBehaviorInput"></a>

```typescript
public readonly defaultBehaviorInput: string;
```

- *Type:* string

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>[]

---

##### `defaultBehavior`<sup>Required</sup> <a name="defaultBehavior" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.defaultBehavior"></a>

```typescript
public readonly defaultBehavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putLoggingFilter">putLoggingFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putRedactedFields">putRedactedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetLoggingFilter">resetLoggingFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetLogType">resetLogType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetRedactedFields">resetRedactedFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingFilter` <a name="putLoggingFilter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putLoggingFilter"></a>

```typescript
public putLoggingFilter(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putLoggingFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a>

---

##### `putRedactedFields` <a name="putRedactedFields" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putRedactedFields"></a>

```typescript
public putRedactedFields(value: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putRedactedFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>[]

---

##### `resetLoggingFilter` <a name="resetLoggingFilter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetLoggingFilter"></a>

```typescript
public resetLoggingFilter(): void
```

##### `resetLogType` <a name="resetLogType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetLogType"></a>

```typescript
public resetLogType(): void
```

##### `resetRedactedFields` <a name="resetRedactedFields" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetRedactedFields"></a>

```typescript
public resetRedactedFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.loggingFilter">loggingFilter</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.redactedFields">redactedFields</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.loggingFilterInput">loggingFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.redactedFieldsInput">redactedFieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loggingFilter`<sup>Required</sup> <a name="loggingFilter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.loggingFilter"></a>

```typescript
public readonly loggingFilter: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference</a>

---

##### `redactedFields`<sup>Required</sup> <a name="redactedFields" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.redactedFields"></a>

```typescript
public readonly redactedFields: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList</a>

---

##### `loggingFilterInput`<sup>Optional</sup> <a name="loggingFilterInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.loggingFilterInput"></a>

```typescript
public readonly loggingFilterInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a>

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `redactedFieldsInput`<sup>Optional</sup> <a name="redactedFieldsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.redactedFieldsInput"></a>

```typescript
public readonly redactedFieldsInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>[]

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.get"></a>

```typescript
public get(index: number): ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>[]

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.putSingleHeader">putSingleHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetSingleHeader">resetSingleHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetUriPath">resetUriPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSingleHeader` <a name="putSingleHeader" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.putSingleHeader"></a>

```typescript
public putSingleHeader(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.putSingleHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a>

---

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```

##### `resetSingleHeader` <a name="resetSingleHeader" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetSingleHeader"></a>

```typescript
public resetSingleHeader(): void
```

##### `resetUriPath` <a name="resetUriPath" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetUriPath"></a>

```typescript
public resetUriPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.singleHeader">singleHeader</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.singleHeaderInput">singleHeaderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.uriPathInput">uriPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.uriPath">uriPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `singleHeader`<sup>Required</sup> <a name="singleHeader" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.singleHeader"></a>

```typescript
public readonly singleHeader: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference</a>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `singleHeaderInput`<sup>Optional</sup> <a name="singleHeaderInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.singleHeaderInput"></a>

```typescript
public readonly singleHeaderInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a>

---

##### `uriPathInput`<sup>Optional</sup> <a name="uriPathInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.uriPathInput"></a>

```typescript
public readonly uriPathInput: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `uriPath`<sup>Required</sup> <a name="uriPath" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.uriPath"></a>

```typescript
public readonly uriPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.putDestinationConfiguration">putDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetAllowFieldUpdates">resetAllowFieldUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetAllRegions">resetAllRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetDestinationConfiguration">resetDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetSelectionCriteria">resetSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetTelemetrySourceTypes">resetTelemetrySourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationConfiguration` <a name="putDestinationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.putDestinationConfiguration"></a>

```typescript
public putDestinationConfiguration(value: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.putDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration</a>

---

##### `resetAllowFieldUpdates` <a name="resetAllowFieldUpdates" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetAllowFieldUpdates"></a>

```typescript
public resetAllowFieldUpdates(): void
```

##### `resetAllRegions` <a name="resetAllRegions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetAllRegions"></a>

```typescript
public resetAllRegions(): void
```

##### `resetDestinationConfiguration` <a name="resetDestinationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetDestinationConfiguration"></a>

```typescript
public resetDestinationConfiguration(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSelectionCriteria` <a name="resetSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetSelectionCriteria"></a>

```typescript
public resetSelectionCriteria(): void
```

##### `resetTelemetrySourceTypes` <a name="resetTelemetrySourceTypes" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetTelemetrySourceTypes"></a>

```typescript
public resetTelemetrySourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.destinationConfiguration">destinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allowFieldUpdatesInput">allowFieldUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allRegionsInput">allRegionsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.destinationConfigurationInput">destinationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.selectionCriteriaInput">selectionCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetrySourceTypesInput">telemetrySourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetryTypeInput">telemetryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allowFieldUpdates">allowFieldUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allRegions">allRegions</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.selectionCriteria">selectionCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetrySourceTypes">telemetrySourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetryType">telemetryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule">ObservabilityadminOrganizationTelemetryRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationConfiguration`<sup>Required</sup> <a name="destinationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.destinationConfiguration"></a>

```typescript
public readonly destinationConfiguration: ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference</a>

---

##### `allowFieldUpdatesInput`<sup>Optional</sup> <a name="allowFieldUpdatesInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allowFieldUpdatesInput"></a>

```typescript
public readonly allowFieldUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allRegionsInput`<sup>Optional</sup> <a name="allRegionsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allRegionsInput"></a>

```typescript
public readonly allRegionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `destinationConfigurationInput`<sup>Optional</sup> <a name="destinationConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.destinationConfigurationInput"></a>

```typescript
public readonly destinationConfigurationInput: IResolvable | ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration</a>

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `selectionCriteriaInput`<sup>Optional</sup> <a name="selectionCriteriaInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.selectionCriteriaInput"></a>

```typescript
public readonly selectionCriteriaInput: string;
```

- *Type:* string

---

##### `telemetrySourceTypesInput`<sup>Optional</sup> <a name="telemetrySourceTypesInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetrySourceTypesInput"></a>

```typescript
public readonly telemetrySourceTypesInput: string[];
```

- *Type:* string[]

---

##### `telemetryTypeInput`<sup>Optional</sup> <a name="telemetryTypeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetryTypeInput"></a>

```typescript
public readonly telemetryTypeInput: string;
```

- *Type:* string

---

##### `allowFieldUpdates`<sup>Required</sup> <a name="allowFieldUpdates" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allowFieldUpdates"></a>

```typescript
public readonly allowFieldUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allRegions`<sup>Required</sup> <a name="allRegions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allRegions"></a>

```typescript
public readonly allRegions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `selectionCriteria`<sup>Required</sup> <a name="selectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.selectionCriteria"></a>

```typescript
public readonly selectionCriteria: string;
```

- *Type:* string

---

##### `telemetrySourceTypes`<sup>Required</sup> <a name="telemetrySourceTypes" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetrySourceTypes"></a>

```typescript
public readonly telemetrySourceTypes: string[];
```

- *Type:* string[]

---

##### `telemetryType`<sup>Required</sup> <a name="telemetryType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetryType"></a>

```typescript
public readonly telemetryType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule">ObservabilityadminOrganizationTelemetryRuleRule</a>

---


### ObservabilityadminOrganizationTelemetryRuleTagsList <a name="ObservabilityadminOrganizationTelemetryRuleTagsList" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.get"></a>

```typescript
public get(index: number): ObservabilityadminOrganizationTelemetryRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags">ObservabilityadminOrganizationTelemetryRuleTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags">ObservabilityadminOrganizationTelemetryRuleTags</a>[]

---


### ObservabilityadminOrganizationTelemetryRuleTagsOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleTagsOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer"></a>

```typescript
import { observabilityadminOrganizationTelemetryRule } from '@cdktn/provider-awscc'

new observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags">ObservabilityadminOrganizationTelemetryRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityadminOrganizationTelemetryRuleTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags">ObservabilityadminOrganizationTelemetryRuleTags</a>

---




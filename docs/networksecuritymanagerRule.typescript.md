# `networksecuritymanagerRule` Submodule <a name="`networksecuritymanagerRule` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerRule <a name="NetworksecuritymanagerRule" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_rule awscc_networksecuritymanager_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.Initializer"></a>

```typescript
import { networksecuritymanagerRule } from '@cdktn/provider-awscc'

new networksecuritymanagerRule.NetworksecuritymanagerRule(scope: Construct, id: string, config: NetworksecuritymanagerRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig">NetworksecuritymanagerRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig">NetworksecuritymanagerRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.resetFirewallType">resetFirewallType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.resetRuleDescription">resetRuleDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.resetRuleType">resetRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworksecuritymanagerRuleTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags">NetworksecuritymanagerRuleTags</a>[]

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetFirewallType` <a name="resetFirewallType" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.resetFirewallType"></a>

```typescript
public resetFirewallType(): void
```

##### `resetRuleDescription` <a name="resetRuleDescription" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.resetRuleDescription"></a>

```typescript
public resetRuleDescription(): void
```

##### `resetRuleType` <a name="resetRuleType" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.resetRuleType"></a>

```typescript
public resetRuleType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.isConstruct"></a>

```typescript
import { networksecuritymanagerRule } from '@cdktn/provider-awscc'

networksecuritymanagerRule.NetworksecuritymanagerRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.isTerraformElement"></a>

```typescript
import { networksecuritymanagerRule } from '@cdktn/provider-awscc'

networksecuritymanagerRule.NetworksecuritymanagerRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.isTerraformResource"></a>

```typescript
import { networksecuritymanagerRule } from '@cdktn/provider-awscc'

networksecuritymanagerRule.NetworksecuritymanagerRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.generateConfigForImport"></a>

```typescript
import { networksecuritymanagerRule } from '@cdktn/provider-awscc'

networksecuritymanagerRule.NetworksecuritymanagerRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworksecuritymanagerRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworksecuritymanagerRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworksecuritymanagerRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList">NetworksecuritymanagerRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.configurationInput">configurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.firewallTypeInput">firewallTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleDescriptionInput">ruleDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleTypeInput">ruleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags">NetworksecuritymanagerRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.firewallType">firewallType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleDescription">ruleDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.tags"></a>

```typescript
public readonly tags: NetworksecuritymanagerRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList">NetworksecuritymanagerRuleTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.configurationInput"></a>

```typescript
public readonly configurationInput: string;
```

- *Type:* string

---

##### `firewallTypeInput`<sup>Optional</sup> <a name="firewallTypeInput" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.firewallTypeInput"></a>

```typescript
public readonly firewallTypeInput: string;
```

- *Type:* string

---

##### `ruleDescriptionInput`<sup>Optional</sup> <a name="ruleDescriptionInput" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleDescriptionInput"></a>

```typescript
public readonly ruleDescriptionInput: string;
```

- *Type:* string

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `ruleTypeInput`<sup>Optional</sup> <a name="ruleTypeInput" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleTypeInput"></a>

```typescript
public readonly ruleTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworksecuritymanagerRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags">NetworksecuritymanagerRuleTags</a>[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.firewallType"></a>

```typescript
public readonly firewallType: string;
```

- *Type:* string

---

##### `ruleDescription`<sup>Required</sup> <a name="ruleDescription" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleDescription"></a>

```typescript
public readonly ruleDescription: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerRuleConfig <a name="NetworksecuritymanagerRuleConfig" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.Initializer"></a>

```typescript
import { networksecuritymanagerRule } from '@cdktn/provider-awscc'

const networksecuritymanagerRuleConfig: networksecuritymanagerRule.NetworksecuritymanagerRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.ruleName">ruleName</a></code> | <code>string</code> | The name of the rule. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.configuration">configuration</a></code> | <code>string</code> | The rule configuration as a JSON string. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.firewallType">firewallType</a></code> | <code>string</code> | The type of firewall for this rule. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.ruleDescription">ruleDescription</a></code> | <code>string</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.ruleType">ruleType</a></code> | <code>string</code> | The type of rule. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags">NetworksecuritymanagerRuleTags</a>[]</code> | The tags associated with the rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_rule#rule_name NetworksecuritymanagerRule#rule_name}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

The rule configuration as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_rule#configuration NetworksecuritymanagerRule#configuration}

---

##### `firewallType`<sup>Optional</sup> <a name="firewallType" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.firewallType"></a>

```typescript
public readonly firewallType: string;
```

- *Type:* string

The type of firewall for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_rule#firewall_type NetworksecuritymanagerRule#firewall_type}

---

##### `ruleDescription`<sup>Optional</sup> <a name="ruleDescription" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.ruleDescription"></a>

```typescript
public readonly ruleDescription: string;
```

- *Type:* string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_rule#rule_description NetworksecuritymanagerRule#rule_description}

---

##### `ruleType`<sup>Optional</sup> <a name="ruleType" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

The type of rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_rule#rule_type NetworksecuritymanagerRule#rule_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworksecuritymanagerRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags">NetworksecuritymanagerRuleTags</a>[]

The tags associated with the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_rule#tags NetworksecuritymanagerRule#tags}

---

### NetworksecuritymanagerRuleTags <a name="NetworksecuritymanagerRuleTags" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags.Initializer"></a>

```typescript
import { networksecuritymanagerRule } from '@cdktn/provider-awscc'

const networksecuritymanagerRuleTags: networksecuritymanagerRule.NetworksecuritymanagerRuleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_rule#key NetworksecuritymanagerRule#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_rule#value NetworksecuritymanagerRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_rule#key NetworksecuritymanagerRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_rule#value NetworksecuritymanagerRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerRuleTagsList <a name="NetworksecuritymanagerRuleTagsList" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.Initializer"></a>

```typescript
import { networksecuritymanagerRule } from '@cdktn/provider-awscc'

new networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags">NetworksecuritymanagerRuleTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags">NetworksecuritymanagerRuleTags</a>[]

---


### NetworksecuritymanagerRuleTagsOutputReference <a name="NetworksecuritymanagerRuleTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerRule } from '@cdktn/provider-awscc'

new networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags">NetworksecuritymanagerRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerRuleTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerRule.NetworksecuritymanagerRuleTags">NetworksecuritymanagerRuleTags</a>

---




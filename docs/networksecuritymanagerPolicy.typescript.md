# `networksecuritymanagerPolicy` Submodule <a name="`networksecuritymanagerPolicy` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerPolicy <a name="NetworksecuritymanagerPolicy" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy awscc_networksecuritymanager_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

new networksecuritymanagerPolicy.NetworksecuritymanagerPolicy(scope: Construct, id: string, config: NetworksecuritymanagerPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig">NetworksecuritymanagerPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig">NetworksecuritymanagerPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList">putAssociatedTemplateAndRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration">putPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetAssociatedTemplateAndRuleList">resetAssociatedTemplateAndRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetPolicyDescription">resetPolicyDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssociatedTemplateAndRuleList` <a name="putAssociatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList"></a>

```typescript
public putAssociatedTemplateAndRuleList(value: IResolvable | NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>[]

---

##### `putPolicyConfiguration` <a name="putPolicyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration"></a>

```typescript
public putPolicyConfiguration(value: NetworksecuritymanagerPolicyPolicyConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworksecuritymanagerPolicyTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>[]

---

##### `resetAssociatedTemplateAndRuleList` <a name="resetAssociatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetAssociatedTemplateAndRuleList"></a>

```typescript
public resetAssociatedTemplateAndRuleList(): void
```

##### `resetPolicyDescription` <a name="resetPolicyDescription" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetPolicyDescription"></a>

```typescript
public resetPolicyDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworksecuritymanagerPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworksecuritymanagerPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleList">associatedTemplateAndRuleList</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfiguration">policyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList">NetworksecuritymanagerPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleListInput">associatedTemplateAndRuleListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput">firewallTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfigurationInput">policyConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescriptionInput">policyDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType">firewallType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescription">policyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority">priority</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associatedTemplateAndRuleList`<sup>Required</sup> <a name="associatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleList"></a>

```typescript
public readonly associatedTemplateAndRuleList: NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `policyConfiguration`<sup>Required</sup> <a name="policyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfiguration"></a>

```typescript
public readonly policyConfiguration: NetworksecuritymanagerPolicyPolicyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationOutputReference</a>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags"></a>

```typescript
public readonly tags: NetworksecuritymanagerPolicyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList">NetworksecuritymanagerPolicyTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `associatedTemplateAndRuleListInput`<sup>Optional</sup> <a name="associatedTemplateAndRuleListInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleListInput"></a>

```typescript
public readonly associatedTemplateAndRuleListInput: IResolvable | NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>[]

---

##### `firewallTypeInput`<sup>Optional</sup> <a name="firewallTypeInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput"></a>

```typescript
public readonly firewallTypeInput: string;
```

- *Type:* string

---

##### `policyConfigurationInput`<sup>Optional</sup> <a name="policyConfigurationInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfigurationInput"></a>

```typescript
public readonly policyConfigurationInput: IResolvable | NetworksecuritymanagerPolicyPolicyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

---

##### `policyDescriptionInput`<sup>Optional</sup> <a name="policyDescriptionInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescriptionInput"></a>

```typescript
public readonly policyDescriptionInput: string;
```

- *Type:* string

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworksecuritymanagerPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>[]

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType"></a>

```typescript
public readonly firewallType: string;
```

- *Type:* string

---

##### `policyDescription`<sup>Required</sup> <a name="policyDescription" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescription"></a>

```typescript
public readonly policyDescription: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.Initializer"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

const networksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct: networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.ruleArn">ruleArn</a></code> | <code>string</code> | ARN of the associated rule. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.templateArn">templateArn</a></code> | <code>string</code> | ARN of the associated template. |

---

##### `ruleArn`<sup>Optional</sup> <a name="ruleArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

ARN of the associated rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#rule_arn NetworksecuritymanagerPolicy#rule_arn}

---

##### `templateArn`<sup>Optional</sup> <a name="templateArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.templateArn"></a>

```typescript
public readonly templateArn: string;
```

- *Type:* string

ARN of the associated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#template_arn NetworksecuritymanagerPolicy#template_arn}

---

### NetworksecuritymanagerPolicyConfig <a name="NetworksecuritymanagerPolicyConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.Initializer"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

const networksecuritymanagerPolicyConfig: networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType">firewallType</a></code> | <code>string</code> | The type of firewall. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyConfiguration">policyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | Configuration settings for policy behavior. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyName">policyName</a></code> | <code>string</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority">priority</a></code> | <code>number</code> | The priority of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.associatedTemplateAndRuleList">associatedTemplateAndRuleList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>[]</code> | List of templates and rules associated with this policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyDescription">policyDescription</a></code> | <code>string</code> | A description of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>[]</code> | The tags associated with the policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType"></a>

```typescript
public readonly firewallType: string;
```

- *Type:* string

The type of firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}

---

##### `policyConfiguration`<sup>Required</sup> <a name="policyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyConfiguration"></a>

```typescript
public readonly policyConfiguration: NetworksecuritymanagerPolicyPolicyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

Configuration settings for policy behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_configuration NetworksecuritymanagerPolicy#policy_configuration}

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_name NetworksecuritymanagerPolicy#policy_name}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}

---

##### `associatedTemplateAndRuleList`<sup>Optional</sup> <a name="associatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.associatedTemplateAndRuleList"></a>

```typescript
public readonly associatedTemplateAndRuleList: IResolvable | NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>[]

List of templates and rules associated with this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#associated_template_and_rule_list NetworksecuritymanagerPolicy#associated_template_and_rule_list}

---

##### `policyDescription`<sup>Optional</sup> <a name="policyDescription" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyDescription"></a>

```typescript
public readonly policyDescription: string;
```

- *Type:* string

A description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_description NetworksecuritymanagerPolicy#policy_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworksecuritymanagerPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>[]

The tags associated with the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}

---

### NetworksecuritymanagerPolicyPolicyConfiguration <a name="NetworksecuritymanagerPolicyPolicyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.Initializer"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

const networksecuritymanagerPolicyPolicyConfiguration: networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.remediationEnabled">remediationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Controls automatic remediation of non-compliant resources. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.resourcesCleanUp">resourcesCleanUp</a></code> | <code>boolean \| cdktn.IResolvable</code> | Controls automatic cleanup of unused resources. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.wafConfig">wafConfig</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a></code> | WAF-specific policy settings. Populated only for WAF firewall type policies. |

---

##### `remediationEnabled`<sup>Optional</sup> <a name="remediationEnabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.remediationEnabled"></a>

```typescript
public readonly remediationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Controls automatic remediation of non-compliant resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#remediation_enabled NetworksecuritymanagerPolicy#remediation_enabled}

---

##### `resourcesCleanUp`<sup>Optional</sup> <a name="resourcesCleanUp" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.resourcesCleanUp"></a>

```typescript
public readonly resourcesCleanUp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Controls automatic cleanup of unused resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#resources_clean_up NetworksecuritymanagerPolicy#resources_clean_up}

---

##### `wafConfig`<sup>Optional</sup> <a name="wafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.wafConfig"></a>

```typescript
public readonly wafConfig: NetworksecuritymanagerPolicyPolicyConfigurationWafConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

WAF-specific policy settings. Populated only for WAF firewall type policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#waf_config NetworksecuritymanagerPolicy#waf_config}

---

### NetworksecuritymanagerPolicyPolicyConfigurationWafConfig <a name="NetworksecuritymanagerPolicyPolicyConfigurationWafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.Initializer"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

const networksecuritymanagerPolicyPolicyConfigurationWafConfig: networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.conflictResolution">conflictResolution</a></code> | <code>string</code> | Conflict-resolution strategy applied to AWS WAF policies. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution">existingCustomerWebAclResolution</a></code> | <code>string</code> | Controls how Network Security Manager handles remediation when a resource already has a customer-created WebACL. |

---

##### `conflictResolution`<sup>Optional</sup> <a name="conflictResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.conflictResolution"></a>

```typescript
public readonly conflictResolution: string;
```

- *Type:* string

Conflict-resolution strategy applied to AWS WAF policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#conflict_resolution NetworksecuritymanagerPolicy#conflict_resolution}

---

##### `existingCustomerWebAclResolution`<sup>Optional</sup> <a name="existingCustomerWebAclResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution"></a>

```typescript
public readonly existingCustomerWebAclResolution: string;
```

- *Type:* string

Controls how Network Security Manager handles remediation when a resource already has a customer-created WebACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#existing_customer_web_acl_resolution NetworksecuritymanagerPolicy#existing_customer_web_acl_resolution}

---

### NetworksecuritymanagerPolicyTags <a name="NetworksecuritymanagerPolicyTags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.Initializer"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

const networksecuritymanagerPolicyTags: networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#key NetworksecuritymanagerPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#value NetworksecuritymanagerPolicy#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#key NetworksecuritymanagerPolicy#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#value NetworksecuritymanagerPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

new networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>[]

---


### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

new networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetRuleArn">resetRuleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetTemplateArn">resetTemplateArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRuleArn` <a name="resetRuleArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetRuleArn"></a>

```typescript
public resetRuleArn(): void
```

##### `resetTemplateArn` <a name="resetTemplateArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetTemplateArn"></a>

```typescript
public resetTemplateArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArnInput">ruleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArnInput">templateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArn">templateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleArnInput`<sup>Optional</sup> <a name="ruleArnInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArnInput"></a>

```typescript
public readonly ruleArnInput: string;
```

- *Type:* string

---

##### `templateArnInput`<sup>Optional</sup> <a name="templateArnInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArnInput"></a>

```typescript
public readonly templateArnInput: string;
```

- *Type:* string

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `templateArn`<sup>Required</sup> <a name="templateArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArn"></a>

```typescript
public readonly templateArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct</a>

---


### NetworksecuritymanagerPolicyPolicyConfigurationOutputReference <a name="NetworksecuritymanagerPolicyPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

new networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig">putWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetRemediationEnabled">resetRemediationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetResourcesCleanUp">resetResourcesCleanUp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetWafConfig">resetWafConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWafConfig` <a name="putWafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig"></a>

```typescript
public putWafConfig(value: NetworksecuritymanagerPolicyPolicyConfigurationWafConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

---

##### `resetRemediationEnabled` <a name="resetRemediationEnabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetRemediationEnabled"></a>

```typescript
public resetRemediationEnabled(): void
```

##### `resetResourcesCleanUp` <a name="resetResourcesCleanUp" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetResourcesCleanUp"></a>

```typescript
public resetResourcesCleanUp(): void
```

##### `resetWafConfig` <a name="resetWafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetWafConfig"></a>

```typescript
public resetWafConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfig">wafConfig</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabledInput">remediationEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUpInput">resourcesCleanUpInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfigInput">wafConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabled">remediationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUp">resourcesCleanUp</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `wafConfig`<sup>Required</sup> <a name="wafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfig"></a>

```typescript
public readonly wafConfig: NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference</a>

---

##### `remediationEnabledInput`<sup>Optional</sup> <a name="remediationEnabledInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabledInput"></a>

```typescript
public readonly remediationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourcesCleanUpInput`<sup>Optional</sup> <a name="resourcesCleanUpInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUpInput"></a>

```typescript
public readonly resourcesCleanUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `wafConfigInput`<sup>Optional</sup> <a name="wafConfigInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfigInput"></a>

```typescript
public readonly wafConfigInput: IResolvable | NetworksecuritymanagerPolicyPolicyConfigurationWafConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

---

##### `remediationEnabled`<sup>Required</sup> <a name="remediationEnabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabled"></a>

```typescript
public readonly remediationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourcesCleanUp`<sup>Required</sup> <a name="resourcesCleanUp" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUp"></a>

```typescript
public readonly resourcesCleanUp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerPolicyPolicyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

---


### NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference <a name="NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

new networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetConflictResolution">resetConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetExistingCustomerWebAclResolution">resetExistingCustomerWebAclResolution</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConflictResolution` <a name="resetConflictResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetConflictResolution"></a>

```typescript
public resetConflictResolution(): void
```

##### `resetExistingCustomerWebAclResolution` <a name="resetExistingCustomerWebAclResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetExistingCustomerWebAclResolution"></a>

```typescript
public resetExistingCustomerWebAclResolution(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput">conflictResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput">existingCustomerWebAclResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolution">conflictResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution">existingCustomerWebAclResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conflictResolutionInput`<sup>Optional</sup> <a name="conflictResolutionInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput"></a>

```typescript
public readonly conflictResolutionInput: string;
```

- *Type:* string

---

##### `existingCustomerWebAclResolutionInput`<sup>Optional</sup> <a name="existingCustomerWebAclResolutionInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput"></a>

```typescript
public readonly existingCustomerWebAclResolutionInput: string;
```

- *Type:* string

---

##### `conflictResolution`<sup>Required</sup> <a name="conflictResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolution"></a>

```typescript
public readonly conflictResolution: string;
```

- *Type:* string

---

##### `existingCustomerWebAclResolution`<sup>Required</sup> <a name="existingCustomerWebAclResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution"></a>

```typescript
public readonly existingCustomerWebAclResolution: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerPolicyPolicyConfigurationWafConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

---


### NetworksecuritymanagerPolicyTagsList <a name="NetworksecuritymanagerPolicyTagsList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

new networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>[]

---


### NetworksecuritymanagerPolicyTagsOutputReference <a name="NetworksecuritymanagerPolicyTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerPolicy } from '@cdktn/provider-awscc'

new networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerPolicyTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags">NetworksecuritymanagerPolicyTags</a>

---




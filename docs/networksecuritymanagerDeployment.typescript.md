# `networksecuritymanagerDeployment` Submodule <a name="`networksecuritymanagerDeployment` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerDeployment <a name="NetworksecuritymanagerDeployment" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment awscc_networksecuritymanager_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new networksecuritymanagerDeployment.NetworksecuritymanagerDeployment(scope: Construct, id: string, config: NetworksecuritymanagerDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig">NetworksecuritymanagerDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig">NetworksecuritymanagerDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList">putAssociatedPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList">putAssociatedScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration">putDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedPolicyList">resetAssociatedPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedScopeList">resetAssociatedScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentConfiguration">resetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentDescription">resetDeploymentDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssociatedPolicyList` <a name="putAssociatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList"></a>

```typescript
public putAssociatedPolicyList(value: IResolvable | NetworksecuritymanagerDeploymentAssociatedPolicyListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>[]

---

##### `putAssociatedScopeList` <a name="putAssociatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList"></a>

```typescript
public putAssociatedScopeList(value: IResolvable | NetworksecuritymanagerDeploymentAssociatedScopeListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>[]

---

##### `putDeploymentConfiguration` <a name="putDeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration"></a>

```typescript
public putDeploymentConfiguration(value: NetworksecuritymanagerDeploymentDeploymentConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworksecuritymanagerDeploymentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>[]

---

##### `resetAssociatedPolicyList` <a name="resetAssociatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedPolicyList"></a>

```typescript
public resetAssociatedPolicyList(): void
```

##### `resetAssociatedScopeList` <a name="resetAssociatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedScopeList"></a>

```typescript
public resetAssociatedScopeList(): void
```

##### `resetDeploymentConfiguration` <a name="resetDeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentConfiguration"></a>

```typescript
public resetDeploymentConfiguration(): void
```

##### `resetDeploymentDescription` <a name="resetDeploymentDescription" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentDescription"></a>

```typescript
public resetDeploymentDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworksecuritymanagerDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworksecuritymanagerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyList">associatedPolicyList</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList">NetworksecuritymanagerDeploymentAssociatedPolicyListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeList">associatedScopeList</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList">NetworksecuritymanagerDeploymentAssociatedScopeListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentArn">deploymentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference">NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList">NetworksecuritymanagerDeploymentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyListInput">associatedPolicyListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeListInput">associatedScopeListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfigurationInput">deploymentConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescriptionInput">deploymentDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentNameInput">deploymentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescription">deploymentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentName">deploymentName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associatedPolicyList`<sup>Required</sup> <a name="associatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyList"></a>

```typescript
public readonly associatedPolicyList: NetworksecuritymanagerDeploymentAssociatedPolicyListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList">NetworksecuritymanagerDeploymentAssociatedPolicyListStructList</a>

---

##### `associatedScopeList`<sup>Required</sup> <a name="associatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeList"></a>

```typescript
public readonly associatedScopeList: NetworksecuritymanagerDeploymentAssociatedScopeListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList">NetworksecuritymanagerDeploymentAssociatedScopeListStructList</a>

---

##### `deploymentArn`<sup>Required</sup> <a name="deploymentArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentArn"></a>

```typescript
public readonly deploymentArn: string;
```

- *Type:* string

---

##### `deploymentConfiguration`<sup>Required</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfiguration"></a>

```typescript
public readonly deploymentConfiguration: NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference">NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference</a>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tags"></a>

```typescript
public readonly tags: NetworksecuritymanagerDeploymentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList">NetworksecuritymanagerDeploymentTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `associatedPolicyListInput`<sup>Optional</sup> <a name="associatedPolicyListInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyListInput"></a>

```typescript
public readonly associatedPolicyListInput: IResolvable | NetworksecuritymanagerDeploymentAssociatedPolicyListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>[]

---

##### `associatedScopeListInput`<sup>Optional</sup> <a name="associatedScopeListInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeListInput"></a>

```typescript
public readonly associatedScopeListInput: IResolvable | NetworksecuritymanagerDeploymentAssociatedScopeListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>[]

---

##### `deploymentConfigurationInput`<sup>Optional</sup> <a name="deploymentConfigurationInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfigurationInput"></a>

```typescript
public readonly deploymentConfigurationInput: IResolvable | NetworksecuritymanagerDeploymentDeploymentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

---

##### `deploymentDescriptionInput`<sup>Optional</sup> <a name="deploymentDescriptionInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescriptionInput"></a>

```typescript
public readonly deploymentDescriptionInput: string;
```

- *Type:* string

---

##### `deploymentNameInput`<sup>Optional</sup> <a name="deploymentNameInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentNameInput"></a>

```typescript
public readonly deploymentNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworksecuritymanagerDeploymentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>[]

---

##### `deploymentDescription`<sup>Required</sup> <a name="deploymentDescription" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescription"></a>

```typescript
public readonly deploymentDescription: string;
```

- *Type:* string

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentName"></a>

```typescript
public readonly deploymentName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerDeploymentAssociatedPolicyListStruct <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStruct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.Initializer"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

const networksecuritymanagerDeploymentAssociatedPolicyListStruct: networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.property.policyArn">policyArn</a></code> | <code>string</code> | ARN of the associated policy. |

---

##### `policyArn`<sup>Optional</sup> <a name="policyArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

ARN of the associated policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#policy_arn NetworksecuritymanagerDeployment#policy_arn}

---

### NetworksecuritymanagerDeploymentAssociatedScopeListStruct <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStruct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.Initializer"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

const networksecuritymanagerDeploymentAssociatedScopeListStruct: networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.property.scopeArn">scopeArn</a></code> | <code>string</code> | ARN of the associated scope. |

---

##### `scopeArn`<sup>Optional</sup> <a name="scopeArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.property.scopeArn"></a>

```typescript
public readonly scopeArn: string;
```

- *Type:* string

ARN of the associated scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#scope_arn NetworksecuritymanagerDeployment#scope_arn}

---

### NetworksecuritymanagerDeploymentConfig <a name="NetworksecuritymanagerDeploymentConfig" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.Initializer"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

const networksecuritymanagerDeploymentConfig: networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentName">deploymentName</a></code> | <code>string</code> | The name of the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedPolicyList">associatedPolicyList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>[]</code> | List of policies associated with this deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedScopeList">associatedScopeList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>[]</code> | List of scopes associated with this deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | Configuration settings for the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentDescription">deploymentDescription</a></code> | <code>string</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>[]</code> | The tags associated with the deployment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentName"></a>

```typescript
public readonly deploymentName: string;
```

- *Type:* string

The name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_name NetworksecuritymanagerDeployment#deployment_name}

---

##### `associatedPolicyList`<sup>Optional</sup> <a name="associatedPolicyList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedPolicyList"></a>

```typescript
public readonly associatedPolicyList: IResolvable | NetworksecuritymanagerDeploymentAssociatedPolicyListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>[]

List of policies associated with this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_policy_list NetworksecuritymanagerDeployment#associated_policy_list}

---

##### `associatedScopeList`<sup>Optional</sup> <a name="associatedScopeList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedScopeList"></a>

```typescript
public readonly associatedScopeList: IResolvable | NetworksecuritymanagerDeploymentAssociatedScopeListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>[]

List of scopes associated with this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_scope_list NetworksecuritymanagerDeployment#associated_scope_list}

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="deploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentConfiguration"></a>

```typescript
public readonly deploymentConfiguration: NetworksecuritymanagerDeploymentDeploymentConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

Configuration settings for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_configuration NetworksecuritymanagerDeployment#deployment_configuration}

---

##### `deploymentDescription`<sup>Optional</sup> <a name="deploymentDescription" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentDescription"></a>

```typescript
public readonly deploymentDescription: string;
```

- *Type:* string

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_description NetworksecuritymanagerDeployment#deployment_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworksecuritymanagerDeploymentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>[]

The tags associated with the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#tags NetworksecuritymanagerDeployment#tags}

---

### NetworksecuritymanagerDeploymentDeploymentConfiguration <a name="NetworksecuritymanagerDeploymentDeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.Initializer"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

const networksecuritymanagerDeploymentDeploymentConfiguration: networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.property.enableCrossAccountVisibility">enableCrossAccountVisibility</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether cross-account visibility is enabled for the deployment. |

---

##### `enableCrossAccountVisibility`<sup>Optional</sup> <a name="enableCrossAccountVisibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.property.enableCrossAccountVisibility"></a>

```typescript
public readonly enableCrossAccountVisibility: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether cross-account visibility is enabled for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#enable_cross_account_visibility NetworksecuritymanagerDeployment#enable_cross_account_visibility}

---

### NetworksecuritymanagerDeploymentTags <a name="NetworksecuritymanagerDeploymentTags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.Initializer"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

const networksecuritymanagerDeploymentTags: networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#key NetworksecuritymanagerDeployment#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#value NetworksecuritymanagerDeployment#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#key NetworksecuritymanagerDeployment#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#value NetworksecuritymanagerDeployment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerDeploymentAssociatedPolicyListStructList <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStructList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerDeploymentAssociatedPolicyListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>[]

---


### NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resetPolicyArn">resetPolicyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyArn` <a name="resetPolicyArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resetPolicyArn"></a>

```typescript
public resetPolicyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArnInput">policyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyArnInput`<sup>Optional</sup> <a name="policyArnInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArnInput"></a>

```typescript
public readonly policyArnInput: string;
```

- *Type:* string

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerDeploymentAssociatedPolicyListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>

---


### NetworksecuritymanagerDeploymentAssociatedScopeListStructList <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStructList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerDeploymentAssociatedScopeListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>[]

---


### NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resetScopeArn">resetScopeArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopeArn` <a name="resetScopeArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resetScopeArn"></a>

```typescript
public resetScopeArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArnInput">scopeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArn">scopeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopeArnInput`<sup>Optional</sup> <a name="scopeArnInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArnInput"></a>

```typescript
public readonly scopeArnInput: string;
```

- *Type:* string

---

##### `scopeArn`<sup>Required</sup> <a name="scopeArn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArn"></a>

```typescript
public readonly scopeArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerDeploymentAssociatedScopeListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>

---


### NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference <a name="NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resetEnableCrossAccountVisibility">resetEnableCrossAccountVisibility</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableCrossAccountVisibility` <a name="resetEnableCrossAccountVisibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resetEnableCrossAccountVisibility"></a>

```typescript
public resetEnableCrossAccountVisibility(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibilityInput">enableCrossAccountVisibilityInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibility">enableCrossAccountVisibility</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableCrossAccountVisibilityInput`<sup>Optional</sup> <a name="enableCrossAccountVisibilityInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibilityInput"></a>

```typescript
public readonly enableCrossAccountVisibilityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableCrossAccountVisibility`<sup>Required</sup> <a name="enableCrossAccountVisibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibility"></a>

```typescript
public readonly enableCrossAccountVisibility: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerDeploymentDeploymentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

---


### NetworksecuritymanagerDeploymentTagsList <a name="NetworksecuritymanagerDeploymentTagsList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerDeploymentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerDeploymentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>[]

---


### NetworksecuritymanagerDeploymentTagsOutputReference <a name="NetworksecuritymanagerDeploymentTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerDeployment } from '@cdktn/provider-awscc'

new networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerDeploymentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>

---




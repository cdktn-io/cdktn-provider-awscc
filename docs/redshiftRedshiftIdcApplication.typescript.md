# `redshiftRedshiftIdcApplication` Submodule <a name="`redshiftRedshiftIdcApplication` Submodule" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftRedshiftIdcApplication <a name="RedshiftRedshiftIdcApplication" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application awscc_redshift_redshift_idc_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication(scope: Construct, id: string, config: RedshiftRedshiftIdcApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig">RedshiftRedshiftIdcApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig">RedshiftRedshiftIdcApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putAuthorizedTokenIssuerList">putAuthorizedTokenIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putServiceIntegrations">putServiceIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetApplicationType">resetApplicationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetAuthorizedTokenIssuerList">resetAuthorizedTokenIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetIdentityNamespace">resetIdentityNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetServiceIntegrations">resetServiceIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetSsoTagKeys">resetSsoTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorizedTokenIssuerList` <a name="putAuthorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putAuthorizedTokenIssuerList"></a>

```typescript
public putAuthorizedTokenIssuerList(value: IResolvable | RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putAuthorizedTokenIssuerList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>[]

---

##### `putServiceIntegrations` <a name="putServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putServiceIntegrations"></a>

```typescript
public putServiceIntegrations(value: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putServiceIntegrations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putTags"></a>

```typescript
public putTags(value: IResolvable | RedshiftRedshiftIdcApplicationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>[]

---

##### `resetApplicationType` <a name="resetApplicationType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetApplicationType"></a>

```typescript
public resetApplicationType(): void
```

##### `resetAuthorizedTokenIssuerList` <a name="resetAuthorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetAuthorizedTokenIssuerList"></a>

```typescript
public resetAuthorizedTokenIssuerList(): void
```

##### `resetIdentityNamespace` <a name="resetIdentityNamespace" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetIdentityNamespace"></a>

```typescript
public resetIdentityNamespace(): void
```

##### `resetServiceIntegrations` <a name="resetServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetServiceIntegrations"></a>

```typescript
public resetServiceIntegrations(): void
```

##### `resetSsoTagKeys` <a name="resetSsoTagKeys" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetSsoTagKeys"></a>

```typescript
public resetSsoTagKeys(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftRedshiftIdcApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isConstruct"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformElement"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformResource"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RedshiftRedshiftIdcApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftRedshiftIdcApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftRedshiftIdcApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftRedshiftIdcApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerList">authorizedTokenIssuerList</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcManagedApplicationArn">idcManagedApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcOnboardStatus">idcOnboardStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationArn">redshiftIdcApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrations">serviceIntegrations</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList">RedshiftRedshiftIdcApplicationServiceIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList">RedshiftRedshiftIdcApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationTypeInput">applicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerListInput">authorizedTokenIssuerListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayNameInput">idcDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArnInput">idcInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespaceInput">identityNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationNameInput">redshiftIdcApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrationsInput">serviceIntegrationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeysInput">ssoTagKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationType">applicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayName">idcDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArn">idcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespace">identityNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationName">redshiftIdcApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeys">ssoTagKeys</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authorizedTokenIssuerList`<sup>Required</sup> <a name="authorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerList"></a>

```typescript
public readonly authorizedTokenIssuerList: RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcManagedApplicationArn`<sup>Required</sup> <a name="idcManagedApplicationArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcManagedApplicationArn"></a>

```typescript
public readonly idcManagedApplicationArn: string;
```

- *Type:* string

---

##### `idcOnboardStatus`<sup>Required</sup> <a name="idcOnboardStatus" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcOnboardStatus"></a>

```typescript
public readonly idcOnboardStatus: string;
```

- *Type:* string

---

##### `redshiftIdcApplicationArn`<sup>Required</sup> <a name="redshiftIdcApplicationArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationArn"></a>

```typescript
public readonly redshiftIdcApplicationArn: string;
```

- *Type:* string

---

##### `serviceIntegrations`<sup>Required</sup> <a name="serviceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrations"></a>

```typescript
public readonly serviceIntegrations: RedshiftRedshiftIdcApplicationServiceIntegrationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList">RedshiftRedshiftIdcApplicationServiceIntegrationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tags"></a>

```typescript
public readonly tags: RedshiftRedshiftIdcApplicationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList">RedshiftRedshiftIdcApplicationTagsList</a>

---

##### `applicationTypeInput`<sup>Optional</sup> <a name="applicationTypeInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationTypeInput"></a>

```typescript
public readonly applicationTypeInput: string;
```

- *Type:* string

---

##### `authorizedTokenIssuerListInput`<sup>Optional</sup> <a name="authorizedTokenIssuerListInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerListInput"></a>

```typescript
public readonly authorizedTokenIssuerListInput: IResolvable | RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>[]

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `idcDisplayNameInput`<sup>Optional</sup> <a name="idcDisplayNameInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayNameInput"></a>

```typescript
public readonly idcDisplayNameInput: string;
```

- *Type:* string

---

##### `idcInstanceArnInput`<sup>Optional</sup> <a name="idcInstanceArnInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArnInput"></a>

```typescript
public readonly idcInstanceArnInput: string;
```

- *Type:* string

---

##### `identityNamespaceInput`<sup>Optional</sup> <a name="identityNamespaceInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespaceInput"></a>

```typescript
public readonly identityNamespaceInput: string;
```

- *Type:* string

---

##### `redshiftIdcApplicationNameInput`<sup>Optional</sup> <a name="redshiftIdcApplicationNameInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationNameInput"></a>

```typescript
public readonly redshiftIdcApplicationNameInput: string;
```

- *Type:* string

---

##### `serviceIntegrationsInput`<sup>Optional</sup> <a name="serviceIntegrationsInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrationsInput"></a>

```typescript
public readonly serviceIntegrationsInput: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>[]

---

##### `ssoTagKeysInput`<sup>Optional</sup> <a name="ssoTagKeysInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeysInput"></a>

```typescript
public readonly ssoTagKeysInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RedshiftRedshiftIdcApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>[]

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `idcDisplayName`<sup>Required</sup> <a name="idcDisplayName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayName"></a>

```typescript
public readonly idcDisplayName: string;
```

- *Type:* string

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArn"></a>

```typescript
public readonly idcInstanceArn: string;
```

- *Type:* string

---

##### `identityNamespace`<sup>Required</sup> <a name="identityNamespace" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespace"></a>

```typescript
public readonly identityNamespace: string;
```

- *Type:* string

---

##### `redshiftIdcApplicationName`<sup>Required</sup> <a name="redshiftIdcApplicationName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationName"></a>

```typescript
public readonly redshiftIdcApplicationName: string;
```

- *Type:* string

---

##### `ssoTagKeys`<sup>Required</sup> <a name="ssoTagKeys" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeys"></a>

```typescript
public readonly ssoTagKeys: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct <a name="RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

const redshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct: redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.authorizedAudiencesList">authorizedAudiencesList</a></code> | <code>string[]</code> | The list of audiences for the authorized token issuer. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.trustedTokenIssuerArn">trustedTokenIssuerArn</a></code> | <code>string</code> | The ARN for the authorized token issuer for integrating Amazon Redshift with IDC Identity Center. |

---

##### `authorizedAudiencesList`<sup>Optional</sup> <a name="authorizedAudiencesList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.authorizedAudiencesList"></a>

```typescript
public readonly authorizedAudiencesList: string[];
```

- *Type:* string[]

The list of audiences for the authorized token issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorized_audiences_list RedshiftRedshiftIdcApplication#authorized_audiences_list}

---

##### `trustedTokenIssuerArn`<sup>Optional</sup> <a name="trustedTokenIssuerArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.trustedTokenIssuerArn"></a>

```typescript
public readonly trustedTokenIssuerArn: string;
```

- *Type:* string

The ARN for the authorized token issuer for integrating Amazon Redshift with IDC Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#trusted_token_issuer_arn RedshiftRedshiftIdcApplication#trusted_token_issuer_arn}

---

### RedshiftRedshiftIdcApplicationConfig <a name="RedshiftRedshiftIdcApplicationConfig" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

const redshiftRedshiftIdcApplicationConfig: redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | The IAM role ARN for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcDisplayName">idcDisplayName</a></code> | <code>string</code> | The display name for the Amazon Redshift IAM Identity Center application instance. It appears in the console. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcInstanceArn">idcInstanceArn</a></code> | <code>string</code> | The Amazon resource name (ARN) of the IAM Identity Center instance where Amazon Redshift creates a new managed application. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.redshiftIdcApplicationName">redshiftIdcApplicationName</a></code> | <code>string</code> | The name of the Redshift application in IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.applicationType">applicationType</a></code> | <code>string</code> | The type of application being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.authorizedTokenIssuerList">authorizedTokenIssuerList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>[]</code> | The token issuer list for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.identityNamespace">identityNamespace</a></code> | <code>string</code> | The namespace for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.serviceIntegrations">serviceIntegrations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>[]</code> | A collection of service integrations for the Redshift IAM Identity Center application. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.ssoTagKeys">ssoTagKeys</a></code> | <code>string[]</code> | A list of tag keys that Redshift Identity Center applications copy to IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

The IAM role ARN for the Amazon Redshift IAM Identity Center application instance.

It has the required permissions to be assumed and invoke the IDC Identity Center API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#iam_role_arn RedshiftRedshiftIdcApplication#iam_role_arn}

---

##### `idcDisplayName`<sup>Required</sup> <a name="idcDisplayName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcDisplayName"></a>

```typescript
public readonly idcDisplayName: string;
```

- *Type:* string

The display name for the Amazon Redshift IAM Identity Center application instance. It appears in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#idc_display_name RedshiftRedshiftIdcApplication#idc_display_name}

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcInstanceArn"></a>

```typescript
public readonly idcInstanceArn: string;
```

- *Type:* string

The Amazon resource name (ARN) of the IAM Identity Center instance where Amazon Redshift creates a new managed application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#idc_instance_arn RedshiftRedshiftIdcApplication#idc_instance_arn}

---

##### `redshiftIdcApplicationName`<sup>Required</sup> <a name="redshiftIdcApplicationName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.redshiftIdcApplicationName"></a>

```typescript
public readonly redshiftIdcApplicationName: string;
```

- *Type:* string

The name of the Redshift application in IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#redshift_idc_application_name RedshiftRedshiftIdcApplication#redshift_idc_application_name}

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.applicationType"></a>

```typescript
public readonly applicationType: string;
```

- *Type:* string

The type of application being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#application_type RedshiftRedshiftIdcApplication#application_type}

---

##### `authorizedTokenIssuerList`<sup>Optional</sup> <a name="authorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.authorizedTokenIssuerList"></a>

```typescript
public readonly authorizedTokenIssuerList: IResolvable | RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>[]

The token issuer list for the Amazon Redshift IAM Identity Center application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorized_token_issuer_list RedshiftRedshiftIdcApplication#authorized_token_issuer_list}

---

##### `identityNamespace`<sup>Optional</sup> <a name="identityNamespace" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.identityNamespace"></a>

```typescript
public readonly identityNamespace: string;
```

- *Type:* string

The namespace for the Amazon Redshift IAM Identity Center application instance.

It determines which managed application verifies the connection token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#identity_namespace RedshiftRedshiftIdcApplication#identity_namespace}

---

##### `serviceIntegrations`<sup>Optional</sup> <a name="serviceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.serviceIntegrations"></a>

```typescript
public readonly serviceIntegrations: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>[]

A collection of service integrations for the Redshift IAM Identity Center application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#service_integrations RedshiftRedshiftIdcApplication#service_integrations}

---

##### `ssoTagKeys`<sup>Optional</sup> <a name="ssoTagKeys" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.ssoTagKeys"></a>

```typescript
public readonly ssoTagKeys: string[];
```

- *Type:* string[]

A list of tag keys that Redshift Identity Center applications copy to IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#sso_tag_keys RedshiftRedshiftIdcApplication#sso_tag_keys}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RedshiftRedshiftIdcApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#tags RedshiftRedshiftIdcApplication#tags}

---

### RedshiftRedshiftIdcApplicationServiceIntegrations <a name="RedshiftRedshiftIdcApplicationServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

const redshiftRedshiftIdcApplicationServiceIntegrations: redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.lakeFormation">lakeFormation</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>[]</code> | A list of scopes set up for Lake Formation integration. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.redshift">redshift</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>[]</code> | A list of scopes set up for Amazon Redshift integration. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.s3AccessGrants">s3AccessGrants</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>[]</code> | A list of scopes set up for S3 Access Grants integration. |

---

##### `lakeFormation`<sup>Optional</sup> <a name="lakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.lakeFormation"></a>

```typescript
public readonly lakeFormation: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>[]

A list of scopes set up for Lake Formation integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#lake_formation RedshiftRedshiftIdcApplication#lake_formation}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.redshift"></a>

```typescript
public readonly redshift: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>[]

A list of scopes set up for Amazon Redshift integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#redshift RedshiftRedshiftIdcApplication#redshift}

---

##### `s3AccessGrants`<sup>Optional</sup> <a name="s3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.s3AccessGrants"></a>

```typescript
public readonly s3AccessGrants: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>[]

A list of scopes set up for S3 Access Grants integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#s3_access_grants RedshiftRedshiftIdcApplication#s3_access_grants}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

const redshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation: redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.property.lakeFormationQuery">lakeFormationQuery</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a></code> | The Lake Formation scope. |

---

##### `lakeFormationQuery`<sup>Optional</sup> <a name="lakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.property.lakeFormationQuery"></a>

```typescript
public readonly lakeFormationQuery: RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

The Lake Formation scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#lake_formation_query RedshiftRedshiftIdcApplication#lake_formation_query}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

const redshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery: redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.property.authorization">authorization</a></code> | <code>string</code> | Determines whether the query scope is enabled or disabled. |

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Determines whether the query scope is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorization RedshiftRedshiftIdcApplication#authorization}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

const redshiftRedshiftIdcApplicationServiceIntegrationsRedshift: redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.property.connect">connect</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a></code> | The Amazon Redshift connect integration scope. |

---

##### `connect`<sup>Optional</sup> <a name="connect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.property.connect"></a>

```typescript
public readonly connect: RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

The Amazon Redshift connect integration scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#connect RedshiftRedshiftIdcApplication#connect}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

const redshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect: redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.property.authorization">authorization</a></code> | <code>string</code> | Determines whether the Amazon Redshift connect integration is enabled or disabled. |

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Determines whether the Amazon Redshift connect integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorization RedshiftRedshiftIdcApplication#authorization}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

const redshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants: redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.property.readWriteAccess">readWriteAccess</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a></code> | The S3 Access Grants scope. |

---

##### `readWriteAccess`<sup>Optional</sup> <a name="readWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.property.readWriteAccess"></a>

```typescript
public readonly readWriteAccess: RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

The S3 Access Grants scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#read_write_access RedshiftRedshiftIdcApplication#read_write_access}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

const redshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess: redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.property.authorization">authorization</a></code> | <code>string</code> | Determines whether the read/write scope is enabled or disabled. |

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Determines whether the read/write scope is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorization RedshiftRedshiftIdcApplication#authorization}

---

### RedshiftRedshiftIdcApplicationTags <a name="RedshiftRedshiftIdcApplicationTags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

const redshiftRedshiftIdcApplicationTags: redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#key RedshiftRedshiftIdcApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#value RedshiftRedshiftIdcApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList <a name="RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get"></a>

```typescript
public get(index: number): RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>[]

---


### RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference <a name="RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetAuthorizedAudiencesList">resetAuthorizedAudiencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetTrustedTokenIssuerArn">resetTrustedTokenIssuerArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizedAudiencesList` <a name="resetAuthorizedAudiencesList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetAuthorizedAudiencesList"></a>

```typescript
public resetAuthorizedAudiencesList(): void
```

##### `resetTrustedTokenIssuerArn` <a name="resetTrustedTokenIssuerArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetTrustedTokenIssuerArn"></a>

```typescript
public resetTrustedTokenIssuerArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesListInput">authorizedAudiencesListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArnInput">trustedTokenIssuerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesList">authorizedAudiencesList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArn">trustedTokenIssuerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizedAudiencesListInput`<sup>Optional</sup> <a name="authorizedAudiencesListInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesListInput"></a>

```typescript
public readonly authorizedAudiencesListInput: string[];
```

- *Type:* string[]

---

##### `trustedTokenIssuerArnInput`<sup>Optional</sup> <a name="trustedTokenIssuerArnInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArnInput"></a>

```typescript
public readonly trustedTokenIssuerArnInput: string;
```

- *Type:* string

---

##### `authorizedAudiencesList`<sup>Required</sup> <a name="authorizedAudiencesList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesList"></a>

```typescript
public readonly authorizedAudiencesList: string[];
```

- *Type:* string[]

---

##### `trustedTokenIssuerArn`<sup>Required</sup> <a name="trustedTokenIssuerArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArn"></a>

```typescript
public readonly trustedTokenIssuerArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resetAuthorization">resetAuthorization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get"></a>

```typescript
public get(index: number): RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>[]

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.putLakeFormationQuery">putLakeFormationQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resetLakeFormationQuery">resetLakeFormationQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLakeFormationQuery` <a name="putLakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.putLakeFormationQuery"></a>

```typescript
public putLakeFormationQuery(value: RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.putLakeFormationQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

---

##### `resetLakeFormationQuery` <a name="resetLakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resetLakeFormationQuery"></a>

```typescript
public resetLakeFormationQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQuery">lakeFormationQuery</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQueryInput">lakeFormationQueryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lakeFormationQuery`<sup>Required</sup> <a name="lakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQuery"></a>

```typescript
public readonly lakeFormationQuery: RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference</a>

---

##### `lakeFormationQueryInput`<sup>Optional</sup> <a name="lakeFormationQueryInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQueryInput"></a>

```typescript
public readonly lakeFormationQueryInput: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.get"></a>

```typescript
public get(index: number): RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>[]

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putLakeFormation">putLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putRedshift">putRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putS3AccessGrants">putS3AccessGrants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetLakeFormation">resetLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetRedshift">resetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetS3AccessGrants">resetS3AccessGrants</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLakeFormation` <a name="putLakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putLakeFormation"></a>

```typescript
public putLakeFormation(value: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putLakeFormation.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>[]

---

##### `putRedshift` <a name="putRedshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putRedshift"></a>

```typescript
public putRedshift(value: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putRedshift.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>[]

---

##### `putS3AccessGrants` <a name="putS3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putS3AccessGrants"></a>

```typescript
public putS3AccessGrants(value: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putS3AccessGrants.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>[]

---

##### `resetLakeFormation` <a name="resetLakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetLakeFormation"></a>

```typescript
public resetLakeFormation(): void
```

##### `resetRedshift` <a name="resetRedshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetRedshift"></a>

```typescript
public resetRedshift(): void
```

##### `resetS3AccessGrants` <a name="resetS3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetS3AccessGrants"></a>

```typescript
public resetS3AccessGrants(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormation">lakeFormation</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshift">redshift</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrants">s3AccessGrants</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormationInput">lakeFormationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshiftInput">redshiftInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrantsInput">s3AccessGrantsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lakeFormation`<sup>Required</sup> <a name="lakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormation"></a>

```typescript
public readonly lakeFormation: RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList</a>

---

##### `redshift`<sup>Required</sup> <a name="redshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshift"></a>

```typescript
public readonly redshift: RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList</a>

---

##### `s3AccessGrants`<sup>Required</sup> <a name="s3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrants"></a>

```typescript
public readonly s3AccessGrants: RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList</a>

---

##### `lakeFormationInput`<sup>Optional</sup> <a name="lakeFormationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormationInput"></a>

```typescript
public readonly lakeFormationInput: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>[]

---

##### `redshiftInput`<sup>Optional</sup> <a name="redshiftInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshiftInput"></a>

```typescript
public readonly redshiftInput: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>[]

---

##### `s3AccessGrantsInput`<sup>Optional</sup> <a name="s3AccessGrantsInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrantsInput"></a>

```typescript
public readonly s3AccessGrantsInput: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resetAuthorization">resetAuthorization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get"></a>

```typescript
public get(index: number): RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>[]

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.putConnect">putConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resetConnect">resetConnect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnect` <a name="putConnect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.putConnect"></a>

```typescript
public putConnect(value: RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.putConnect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

---

##### `resetConnect` <a name="resetConnect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resetConnect"></a>

```typescript
public resetConnect(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connect">connect</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connectInput">connectInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connect`<sup>Required</sup> <a name="connect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connect"></a>

```typescript
public readonly connect: RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference</a>

---

##### `connectInput`<sup>Optional</sup> <a name="connectInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connectInput"></a>

```typescript
public readonly connectInput: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get"></a>

```typescript
public get(index: number): RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>[]

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.putReadWriteAccess">putReadWriteAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resetReadWriteAccess">resetReadWriteAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReadWriteAccess` <a name="putReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.putReadWriteAccess"></a>

```typescript
public putReadWriteAccess(value: RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.putReadWriteAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

---

##### `resetReadWriteAccess` <a name="resetReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resetReadWriteAccess"></a>

```typescript
public resetReadWriteAccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccess">readWriteAccess</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccessInput">readWriteAccessInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readWriteAccess`<sup>Required</sup> <a name="readWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccess"></a>

```typescript
public readonly readWriteAccess: RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference</a>

---

##### `readWriteAccessInput`<sup>Optional</sup> <a name="readWriteAccessInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccessInput"></a>

```typescript
public readonly readWriteAccessInput: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resetAuthorization">resetAuthorization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

---


### RedshiftRedshiftIdcApplicationTagsList <a name="RedshiftRedshiftIdcApplicationTagsList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.get"></a>

```typescript
public get(index: number): RedshiftRedshiftIdcApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>[]

---


### RedshiftRedshiftIdcApplicationTagsOutputReference <a name="RedshiftRedshiftIdcApplicationTagsOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer"></a>

```typescript
import { redshiftRedshiftIdcApplication } from '@cdktn/provider-awscc'

new redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftRedshiftIdcApplicationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>

---




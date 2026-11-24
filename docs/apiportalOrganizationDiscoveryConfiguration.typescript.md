# `apiportalOrganizationDiscoveryConfiguration` Submodule <a name="`apiportalOrganizationDiscoveryConfiguration` Submodule" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalOrganizationDiscoveryConfiguration <a name="ApiportalOrganizationDiscoveryConfiguration" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration awscc_apiportal_organization_discovery_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

new apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration(scope: Construct, id: string, config: ApiportalOrganizationDiscoveryConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig">ApiportalOrganizationDiscoveryConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig">ApiportalOrganizationDiscoveryConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters">putDiscoveryFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFeatures">resetDiscoveryFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFilters">resetDiscoveryFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDiscoveryFilters` <a name="putDiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters"></a>

```typescript
public putDiscoveryFilters(value: ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags"></a>

```typescript
public putTags(value: IResolvable | ApiportalOrganizationDiscoveryConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>[]

---

##### `resetDiscoveryFeatures` <a name="resetDiscoveryFeatures" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFeatures"></a>

```typescript
public resetDiscoveryFeatures(): void
```

##### `resetDiscoveryFilters` <a name="resetDiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFilters"></a>

```typescript
public resetDiscoveryFilters(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiportalOrganizationDiscoveryConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiportalOrganizationDiscoveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalOrganizationDiscoveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryConfigurationStatus">discoveryConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFilters">discoveryFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList">ApiportalOrganizationDiscoveryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeaturesInput">discoveryFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFiltersInput">discoveryFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySourcesInput">discoverySourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeatures">discoveryFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySources">discoverySources</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `discoveryConfigurationStatus`<sup>Required</sup> <a name="discoveryConfigurationStatus" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryConfigurationStatus"></a>

```typescript
public readonly discoveryConfigurationStatus: string;
```

- *Type:* string

---

##### `discoveryFilters`<sup>Required</sup> <a name="discoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFilters"></a>

```typescript
public readonly discoveryFilters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tags"></a>

```typescript
public readonly tags: ApiportalOrganizationDiscoveryConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList">ApiportalOrganizationDiscoveryConfigurationTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `discoveryFeaturesInput`<sup>Optional</sup> <a name="discoveryFeaturesInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeaturesInput"></a>

```typescript
public readonly discoveryFeaturesInput: string[];
```

- *Type:* string[]

---

##### `discoveryFiltersInput`<sup>Optional</sup> <a name="discoveryFiltersInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFiltersInput"></a>

```typescript
public readonly discoveryFiltersInput: IResolvable | ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

---

##### `discoverySourcesInput`<sup>Optional</sup> <a name="discoverySourcesInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySourcesInput"></a>

```typescript
public readonly discoverySourcesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ApiportalOrganizationDiscoveryConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>[]

---

##### `discoveryFeatures`<sup>Required</sup> <a name="discoveryFeatures" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeatures"></a>

```typescript
public readonly discoveryFeatures: string[];
```

- *Type:* string[]

---

##### `discoverySources`<sup>Required</sup> <a name="discoverySources" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySources"></a>

```typescript
public readonly discoverySources: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalOrganizationDiscoveryConfigurationConfig <a name="ApiportalOrganizationDiscoveryConfigurationConfig" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.Initializer"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

const apiportalOrganizationDiscoveryConfigurationConfig: apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoverySources">discoverySources</a></code> | <code>string[]</code> | The AWS services whose resources are scanned to discover APIs. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFeatures">discoveryFeatures</a></code> | <code>string[]</code> | Optional discovery capabilities to enable. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFilters">discoveryFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>[]</code> | The tags associated with the organization discovery configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `discoverySources`<sup>Required</sup> <a name="discoverySources" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoverySources"></a>

```typescript
public readonly discoverySources: string[];
```

- *Type:* string[]

The AWS services whose resources are scanned to discover APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_sources ApiportalOrganizationDiscoveryConfiguration#discovery_sources}

---

##### `discoveryFeatures`<sup>Optional</sup> <a name="discoveryFeatures" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFeatures"></a>

```typescript
public readonly discoveryFeatures: string[];
```

- *Type:* string[]

Optional discovery capabilities to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_features ApiportalOrganizationDiscoveryConfiguration#discovery_features}

---

##### `discoveryFilters`<sup>Optional</sup> <a name="discoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFilters"></a>

```typescript
public readonly discoveryFilters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_filters ApiportalOrganizationDiscoveryConfiguration#discovery_filters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ApiportalOrganizationDiscoveryConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>[]

The tags associated with the organization discovery configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#tags ApiportalOrganizationDiscoveryConfiguration#tags}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.Initializer"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

const apiportalOrganizationDiscoveryConfigurationDiscoveryFilters: apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.exclusionFilters">exclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | Resources matching any of these filters are excluded from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.inclusionFilters">inclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | Only resources matching any of these filters are included in discovery. |

---

##### `exclusionFilters`<sup>Optional</sup> <a name="exclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.exclusionFilters"></a>

```typescript
public readonly exclusionFilters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

Resources matching any of these filters are excluded from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#exclusion_filters ApiportalOrganizationDiscoveryConfiguration#exclusion_filters}

---

##### `inclusionFilters`<sup>Optional</sup> <a name="inclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.inclusionFilters"></a>

```typescript
public readonly inclusionFilters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

Only resources matching any of these filters are included in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#inclusion_filters ApiportalOrganizationDiscoveryConfiguration#inclusion_filters}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.Initializer"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

const apiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters: apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.accountIds">accountIds</a></code> | <code>string[]</code> | AWS account IDs to exclude from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>string[]</code> | Organizational unit IDs to exclude from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | Resource ARNs to exclude from discovery. |

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

AWS account IDs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#account_ids ApiportalOrganizationDiscoveryConfiguration#account_ids}

---

##### `organizationalUnitIds`<sup>Optional</sup> <a name="organizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.organizationalUnitIds"></a>

```typescript
public readonly organizationalUnitIds: string[];
```

- *Type:* string[]

Organizational unit IDs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#organizational_unit_ids ApiportalOrganizationDiscoveryConfiguration#organizational_unit_ids}

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

Resource ARNs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#resource_arns ApiportalOrganizationDiscoveryConfiguration#resource_arns}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.Initializer"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

const apiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters: apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.accountIds">accountIds</a></code> | <code>string[]</code> | AWS account IDs to include in discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>string[]</code> | Organizational unit IDs to include in discovery. |

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

AWS account IDs to include in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#account_ids ApiportalOrganizationDiscoveryConfiguration#account_ids}

---

##### `organizationalUnitIds`<sup>Optional</sup> <a name="organizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.organizationalUnitIds"></a>

```typescript
public readonly organizationalUnitIds: string[];
```

- *Type:* string[]

Organizational unit IDs to include in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#organizational_unit_ids ApiportalOrganizationDiscoveryConfiguration#organizational_unit_ids}

---

### ApiportalOrganizationDiscoveryConfigurationTags <a name="ApiportalOrganizationDiscoveryConfigurationTags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.Initializer"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

const apiportalOrganizationDiscoveryConfigurationTags: apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#key ApiportalOrganizationDiscoveryConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#value ApiportalOrganizationDiscoveryConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#key ApiportalOrganizationDiscoveryConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#value ApiportalOrganizationDiscoveryConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

new apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetAccountIds">resetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetOrganizationalUnitIds">resetOrganizationalUnitIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetResourceArns">resetResourceArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountIds` <a name="resetAccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetAccountIds"></a>

```typescript
public resetAccountIds(): void
```

##### `resetOrganizationalUnitIds` <a name="resetOrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetOrganizationalUnitIds"></a>

```typescript
public resetOrganizationalUnitIds(): void
```

##### `resetResourceArns` <a name="resetResourceArns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetResourceArns"></a>

```typescript
public resetResourceArns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIdsInput">accountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIdsInput">organizationalUnitIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArnsInput">resourceArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIdsInput"></a>

```typescript
public readonly accountIdsInput: string[];
```

- *Type:* string[]

---

##### `organizationalUnitIdsInput`<sup>Optional</sup> <a name="organizationalUnitIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIdsInput"></a>

```typescript
public readonly organizationalUnitIdsInput: string[];
```

- *Type:* string[]

---

##### `resourceArnsInput`<sup>Optional</sup> <a name="resourceArnsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArnsInput"></a>

```typescript
public readonly resourceArnsInput: string[];
```

- *Type:* string[]

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `organizationalUnitIds`<sup>Required</sup> <a name="organizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIds"></a>

```typescript
public readonly organizationalUnitIds: string[];
```

- *Type:* string[]

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

---


### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

new apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetAccountIds">resetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetOrganizationalUnitIds">resetOrganizationalUnitIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountIds` <a name="resetAccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetAccountIds"></a>

```typescript
public resetAccountIds(): void
```

##### `resetOrganizationalUnitIds` <a name="resetOrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetOrganizationalUnitIds"></a>

```typescript
public resetOrganizationalUnitIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIdsInput">accountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIdsInput">organizationalUnitIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIdsInput"></a>

```typescript
public readonly accountIdsInput: string[];
```

- *Type:* string[]

---

##### `organizationalUnitIdsInput`<sup>Optional</sup> <a name="organizationalUnitIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIdsInput"></a>

```typescript
public readonly organizationalUnitIdsInput: string[];
```

- *Type:* string[]

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `organizationalUnitIds`<sup>Required</sup> <a name="organizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIds"></a>

```typescript
public readonly organizationalUnitIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

---


### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

new apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters">putExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters">putInclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetExclusionFilters">resetExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetInclusionFilters">resetInclusionFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusionFilters` <a name="putExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters"></a>

```typescript
public putExclusionFilters(value: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

---

##### `putInclusionFilters` <a name="putInclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters"></a>

```typescript
public putInclusionFilters(value: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

---

##### `resetExclusionFilters` <a name="resetExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetExclusionFilters"></a>

```typescript
public resetExclusionFilters(): void
```

##### `resetInclusionFilters` <a name="resetInclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetInclusionFilters"></a>

```typescript
public resetInclusionFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFilters">exclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFilters">inclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFiltersInput">exclusionFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFiltersInput">inclusionFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusionFilters`<sup>Required</sup> <a name="exclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFilters"></a>

```typescript
public readonly exclusionFilters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference</a>

---

##### `inclusionFilters`<sup>Required</sup> <a name="inclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFilters"></a>

```typescript
public readonly inclusionFilters: ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference</a>

---

##### `exclusionFiltersInput`<sup>Optional</sup> <a name="exclusionFiltersInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFiltersInput"></a>

```typescript
public readonly exclusionFiltersInput: IResolvable | ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

---

##### `inclusionFiltersInput`<sup>Optional</sup> <a name="inclusionFiltersInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFiltersInput"></a>

```typescript
public readonly inclusionFiltersInput: IResolvable | ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

---


### ApiportalOrganizationDiscoveryConfigurationTagsList <a name="ApiportalOrganizationDiscoveryConfigurationTagsList" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

new apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get"></a>

```typescript
public get(index: number): ApiportalOrganizationDiscoveryConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalOrganizationDiscoveryConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>[]

---


### ApiportalOrganizationDiscoveryConfigurationTagsOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { apiportalOrganizationDiscoveryConfiguration } from '@cdktn/provider-awscc'

new apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalOrganizationDiscoveryConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>

---




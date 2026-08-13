# `configConfigurationAggregator` Submodule <a name="`configConfigurationAggregator` Submodule" id="@cdktn/provider-awscc.configConfigurationAggregator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigurationAggregator <a name="ConfigConfigurationAggregator" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator awscc_config_configuration_aggregator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer"></a>

```typescript
import { configConfigurationAggregator } from '@cdktn/provider-awscc'

new configConfigurationAggregator.ConfigConfigurationAggregator(scope: Construct, id: string, config?: ConfigConfigurationAggregatorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig">ConfigConfigurationAggregatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig">ConfigConfigurationAggregatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSources">putAccountAggregationSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource">putOrganizationAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetAccountAggregationSources">resetAccountAggregationSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetConfigurationAggregatorName">resetConfigurationAggregatorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetOrganizationAggregationSource">resetOrganizationAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccountAggregationSources` <a name="putAccountAggregationSources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSources"></a>

```typescript
public putAccountAggregationSources(value: IResolvable | ConfigConfigurationAggregatorAccountAggregationSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>[]

---

##### `putOrganizationAggregationSource` <a name="putOrganizationAggregationSource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource"></a>

```typescript
public putOrganizationAggregationSource(value: ConfigConfigurationAggregatorOrganizationAggregationSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putTags"></a>

```typescript
public putTags(value: IResolvable | ConfigConfigurationAggregatorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>[]

---

##### `resetAccountAggregationSources` <a name="resetAccountAggregationSources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetAccountAggregationSources"></a>

```typescript
public resetAccountAggregationSources(): void
```

##### `resetConfigurationAggregatorName` <a name="resetConfigurationAggregatorName" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetConfigurationAggregatorName"></a>

```typescript
public resetConfigurationAggregatorName(): void
```

##### `resetOrganizationAggregationSource` <a name="resetOrganizationAggregationSource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetOrganizationAggregationSource"></a>

```typescript
public resetOrganizationAggregationSource(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigConfigurationAggregator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct"></a>

```typescript
import { configConfigurationAggregator } from '@cdktn/provider-awscc'

configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement"></a>

```typescript
import { configConfigurationAggregator } from '@cdktn/provider-awscc'

configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource"></a>

```typescript
import { configConfigurationAggregator } from '@cdktn/provider-awscc'

configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport"></a>

```typescript
import { configConfigurationAggregator } from '@cdktn/provider-awscc'

configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConfigConfigurationAggregator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigConfigurationAggregator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigConfigurationAggregator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigConfigurationAggregator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSources">accountAggregationSources</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList">ConfigConfigurationAggregatorAccountAggregationSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorArn">configurationAggregatorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSource">organizationAggregationSource</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference">ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList">ConfigConfigurationAggregatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSourcesInput">accountAggregationSourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorNameInput">configurationAggregatorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSourceInput">organizationAggregationSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorName">configurationAggregatorName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountAggregationSources`<sup>Required</sup> <a name="accountAggregationSources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSources"></a>

```typescript
public readonly accountAggregationSources: ConfigConfigurationAggregatorAccountAggregationSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList">ConfigConfigurationAggregatorAccountAggregationSourcesList</a>

---

##### `configurationAggregatorArn`<sup>Required</sup> <a name="configurationAggregatorArn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorArn"></a>

```typescript
public readonly configurationAggregatorArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organizationAggregationSource`<sup>Required</sup> <a name="organizationAggregationSource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSource"></a>

```typescript
public readonly organizationAggregationSource: ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference">ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tags"></a>

```typescript
public readonly tags: ConfigConfigurationAggregatorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList">ConfigConfigurationAggregatorTagsList</a>

---

##### `accountAggregationSourcesInput`<sup>Optional</sup> <a name="accountAggregationSourcesInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSourcesInput"></a>

```typescript
public readonly accountAggregationSourcesInput: IResolvable | ConfigConfigurationAggregatorAccountAggregationSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>[]

---

##### `configurationAggregatorNameInput`<sup>Optional</sup> <a name="configurationAggregatorNameInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorNameInput"></a>

```typescript
public readonly configurationAggregatorNameInput: string;
```

- *Type:* string

---

##### `organizationAggregationSourceInput`<sup>Optional</sup> <a name="organizationAggregationSourceInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSourceInput"></a>

```typescript
public readonly organizationAggregationSourceInput: IResolvable | ConfigConfigurationAggregatorOrganizationAggregationSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConfigConfigurationAggregatorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>[]

---

##### `configurationAggregatorName`<sup>Required</sup> <a name="configurationAggregatorName" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorName"></a>

```typescript
public readonly configurationAggregatorName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigurationAggregatorAccountAggregationSources <a name="ConfigConfigurationAggregatorAccountAggregationSources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.Initializer"></a>

```typescript
import { configConfigurationAggregator } from '@cdktn/provider-awscc'

const configConfigurationAggregatorAccountAggregationSources: configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.accountIds">accountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#account_ids ConfigConfigurationAggregator#account_ids}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.allAwsRegions">allAwsRegions</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#aws_regions ConfigConfigurationAggregator#aws_regions}. |

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#account_ids ConfigConfigurationAggregator#account_ids}.

---

##### `allAwsRegions`<sup>Optional</sup> <a name="allAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.allAwsRegions"></a>

```typescript
public readonly allAwsRegions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}.

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#aws_regions ConfigConfigurationAggregator#aws_regions}.

---

### ConfigConfigurationAggregatorConfig <a name="ConfigConfigurationAggregatorConfig" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.Initializer"></a>

```typescript
import { configConfigurationAggregator } from '@cdktn/provider-awscc'

const configConfigurationAggregatorConfig: configConfigurationAggregator.ConfigConfigurationAggregatorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.accountAggregationSources">accountAggregationSources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#account_aggregation_sources ConfigConfigurationAggregator#account_aggregation_sources}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.configurationAggregatorName">configurationAggregatorName</a></code> | <code>string</code> | The name of the aggregator. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.organizationAggregationSource">organizationAggregationSource</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>[]</code> | The tags for the configuration aggregator. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountAggregationSources`<sup>Optional</sup> <a name="accountAggregationSources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.accountAggregationSources"></a>

```typescript
public readonly accountAggregationSources: IResolvable | ConfigConfigurationAggregatorAccountAggregationSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#account_aggregation_sources ConfigConfigurationAggregator#account_aggregation_sources}.

---

##### `configurationAggregatorName`<sup>Optional</sup> <a name="configurationAggregatorName" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.configurationAggregatorName"></a>

```typescript
public readonly configurationAggregatorName: string;
```

- *Type:* string

The name of the aggregator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#configuration_aggregator_name ConfigConfigurationAggregator#configuration_aggregator_name}

---

##### `organizationAggregationSource`<sup>Optional</sup> <a name="organizationAggregationSource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.organizationAggregationSource"></a>

```typescript
public readonly organizationAggregationSource: ConfigConfigurationAggregatorOrganizationAggregationSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConfigConfigurationAggregatorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>[]

The tags for the configuration aggregator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#tags ConfigConfigurationAggregator#tags}

---

### ConfigConfigurationAggregatorOrganizationAggregationSource <a name="ConfigConfigurationAggregatorOrganizationAggregationSource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.Initializer"></a>

```typescript
import { configConfigurationAggregator } from '@cdktn/provider-awscc'

const configConfigurationAggregatorOrganizationAggregationSource: configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.allAwsRegions">allAwsRegions</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#aws_regions ConfigConfigurationAggregator#aws_regions}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#role_arn ConfigConfigurationAggregator#role_arn}. |

---

##### `allAwsRegions`<sup>Optional</sup> <a name="allAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.allAwsRegions"></a>

```typescript
public readonly allAwsRegions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}.

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#aws_regions ConfigConfigurationAggregator#aws_regions}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#role_arn ConfigConfigurationAggregator#role_arn}.

---

### ConfigConfigurationAggregatorTags <a name="ConfigConfigurationAggregatorTags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.Initializer"></a>

```typescript
import { configConfigurationAggregator } from '@cdktn/provider-awscc'

const configConfigurationAggregatorTags: configConfigurationAggregator.ConfigConfigurationAggregatorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#key ConfigConfigurationAggregator#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_configuration_aggregator#value ConfigConfigurationAggregator#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigurationAggregatorAccountAggregationSourcesList <a name="ConfigConfigurationAggregatorAccountAggregationSourcesList" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer"></a>

```typescript
import { configConfigurationAggregator } from '@cdktn/provider-awscc'

new configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.get"></a>

```typescript
public get(index: number): ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConfigurationAggregatorAccountAggregationSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>[]

---


### ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference <a name="ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer"></a>

```typescript
import { configConfigurationAggregator } from '@cdktn/provider-awscc'

new configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAccountIds">resetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAllAwsRegions">resetAllAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountIds` <a name="resetAccountIds" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAccountIds"></a>

```typescript
public resetAccountIds(): void
```

##### `resetAllAwsRegions` <a name="resetAllAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAllAwsRegions"></a>

```typescript
public resetAllAwsRegions(): void
```

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.accountIdsInput">accountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.allAwsRegionsInput">allAwsRegionsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.allAwsRegions">allAwsRegions</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.accountIdsInput"></a>

```typescript
public readonly accountIdsInput: string[];
```

- *Type:* string[]

---

##### `allAwsRegionsInput`<sup>Optional</sup> <a name="allAwsRegionsInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.allAwsRegionsInput"></a>

```typescript
public readonly allAwsRegionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `allAwsRegions`<sup>Required</sup> <a name="allAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.allAwsRegions"></a>

```typescript
public readonly allAwsRegions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConfigurationAggregatorAccountAggregationSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources">ConfigConfigurationAggregatorAccountAggregationSources</a>

---


### ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference <a name="ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer"></a>

```typescript
import { configConfigurationAggregator } from '@cdktn/provider-awscc'

new configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAllAwsRegions">resetAllAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllAwsRegions` <a name="resetAllAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAllAwsRegions"></a>

```typescript
public resetAllAwsRegions(): void
```

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAwsRegions"></a>

```typescript
public resetAwsRegions(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allAwsRegionsInput">allAwsRegionsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allAwsRegions">allAwsRegions</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.awsRegions">awsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allAwsRegionsInput`<sup>Optional</sup> <a name="allAwsRegionsInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allAwsRegionsInput"></a>

```typescript
public readonly allAwsRegionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.awsRegionsInput"></a>

```typescript
public readonly awsRegionsInput: string[];
```

- *Type:* string[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `allAwsRegions`<sup>Required</sup> <a name="allAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allAwsRegions"></a>

```typescript
public readonly allAwsRegions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.awsRegions"></a>

```typescript
public readonly awsRegions: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConfigurationAggregatorOrganizationAggregationSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

---


### ConfigConfigurationAggregatorTagsList <a name="ConfigConfigurationAggregatorTagsList" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer"></a>

```typescript
import { configConfigurationAggregator } from '@cdktn/provider-awscc'

new configConfigurationAggregator.ConfigConfigurationAggregatorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.get"></a>

```typescript
public get(index: number): ConfigConfigurationAggregatorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConfigurationAggregatorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>[]

---


### ConfigConfigurationAggregatorTagsOutputReference <a name="ConfigConfigurationAggregatorTagsOutputReference" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer"></a>

```typescript
import { configConfigurationAggregator } from '@cdktn/provider-awscc'

new configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConfigurationAggregatorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags">ConfigConfigurationAggregatorTags</a>

---




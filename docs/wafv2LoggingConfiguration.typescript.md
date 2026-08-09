# `wafv2LoggingConfiguration` Submodule <a name="`wafv2LoggingConfiguration` Submodule" id="@cdktn/provider-awscc.wafv2LoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2LoggingConfiguration <a name="Wafv2LoggingConfiguration" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration awscc_wafv2_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new wafv2LoggingConfiguration.Wafv2LoggingConfiguration(scope: Construct, id: string, config: Wafv2LoggingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig">Wafv2LoggingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig">Wafv2LoggingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putLoggingFilter">putLoggingFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putRedactedFields">putRedactedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetLoggingFilter">resetLoggingFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetRedactedFields">resetRedactedFields</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingFilter` <a name="putLoggingFilter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putLoggingFilter"></a>

```typescript
public putLoggingFilter(value: Wafv2LoggingConfigurationLoggingFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putLoggingFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a>

---

##### `putRedactedFields` <a name="putRedactedFields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putRedactedFields"></a>

```typescript
public putRedactedFields(value: IResolvable | Wafv2LoggingConfigurationRedactedFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.putRedactedFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>[]

---

##### `resetLoggingFilter` <a name="resetLoggingFilter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetLoggingFilter"></a>

```typescript
public resetLoggingFilter(): void
```

##### `resetRedactedFields` <a name="resetRedactedFields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.resetRedactedFields"></a>

```typescript
public resetRedactedFields(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Wafv2LoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isConstruct"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformElement"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformResource"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Wafv2LoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Wafv2LoggingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Wafv2LoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Wafv2LoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.loggingFilter">loggingFilter</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference">Wafv2LoggingConfigurationLoggingFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.managedByFirewallManager">managedByFirewallManager</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.redactedFields">redactedFields</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList">Wafv2LoggingConfigurationRedactedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.logDestinationConfigsInput">logDestinationConfigsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.loggingFilterInput">loggingFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.redactedFieldsInput">redactedFieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.logDestinationConfigs">logDestinationConfigs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loggingFilter`<sup>Required</sup> <a name="loggingFilter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.loggingFilter"></a>

```typescript
public readonly loggingFilter: Wafv2LoggingConfigurationLoggingFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference">Wafv2LoggingConfigurationLoggingFilterOutputReference</a>

---

##### `managedByFirewallManager`<sup>Required</sup> <a name="managedByFirewallManager" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.managedByFirewallManager"></a>

```typescript
public readonly managedByFirewallManager: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `redactedFields`<sup>Required</sup> <a name="redactedFields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.redactedFields"></a>

```typescript
public readonly redactedFields: Wafv2LoggingConfigurationRedactedFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList">Wafv2LoggingConfigurationRedactedFieldsList</a>

---

##### `logDestinationConfigsInput`<sup>Optional</sup> <a name="logDestinationConfigsInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.logDestinationConfigsInput"></a>

```typescript
public readonly logDestinationConfigsInput: string[];
```

- *Type:* string[]

---

##### `loggingFilterInput`<sup>Optional</sup> <a name="loggingFilterInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.loggingFilterInput"></a>

```typescript
public readonly loggingFilterInput: IResolvable | Wafv2LoggingConfigurationLoggingFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a>

---

##### `redactedFieldsInput`<sup>Optional</sup> <a name="redactedFieldsInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.redactedFieldsInput"></a>

```typescript
public readonly redactedFieldsInput: IResolvable | Wafv2LoggingConfigurationRedactedFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>[]

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `logDestinationConfigs`<sup>Required</sup> <a name="logDestinationConfigs" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.logDestinationConfigs"></a>

```typescript
public readonly logDestinationConfigs: string[];
```

- *Type:* string[]

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2LoggingConfigurationConfig <a name="Wafv2LoggingConfigurationConfig" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const wafv2LoggingConfigurationConfig: wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.logDestinationConfigs">logDestinationConfigs</a></code> | <code>string[]</code> | The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.resourceArn">resourceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.loggingFilter">loggingFilter</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a></code> | Filtering that specifies which web requests are kept in the logs and which are dropped. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.redactedFields">redactedFields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>[]</code> | The parts of the request that you want to keep out of the logs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `logDestinationConfigs`<sup>Required</sup> <a name="logDestinationConfigs" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.logDestinationConfigs"></a>

```typescript
public readonly logDestinationConfigs: string[];
```

- *Type:* string[]

The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#log_destination_configs Wafv2LoggingConfiguration#log_destination_configs}

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#resource_arn Wafv2LoggingConfiguration#resource_arn}

---

##### `loggingFilter`<sup>Optional</sup> <a name="loggingFilter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.loggingFilter"></a>

```typescript
public readonly loggingFilter: Wafv2LoggingConfigurationLoggingFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a>

Filtering that specifies which web requests are kept in the logs and which are dropped.

You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#logging_filter Wafv2LoggingConfiguration#logging_filter}

---

##### `redactedFields`<sup>Optional</sup> <a name="redactedFields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationConfig.property.redactedFields"></a>

```typescript
public readonly redactedFields: IResolvable | Wafv2LoggingConfigurationRedactedFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>[]

The parts of the request that you want to keep out of the logs.

For example, if you redact the HEADER field, the HEADER field in the firehose will be xxx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#redacted_fields Wafv2LoggingConfiguration#redacted_fields}

---

### Wafv2LoggingConfigurationLoggingFilter <a name="Wafv2LoggingConfigurationLoggingFilter" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const wafv2LoggingConfigurationLoggingFilter: wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.property.defaultBehavior">defaultBehavior</a></code> | <code>string</code> | Default handling for logs that don't match any of the specified filtering conditions. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.property.filters">filters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>[]</code> | The filters that you want to apply to the logs. |

---

##### `defaultBehavior`<sup>Optional</sup> <a name="defaultBehavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.property.defaultBehavior"></a>

```typescript
public readonly defaultBehavior: string;
```

- *Type:* string

Default handling for logs that don't match any of the specified filtering conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#default_behavior Wafv2LoggingConfiguration#default_behavior}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter.property.filters"></a>

```typescript
public readonly filters: IResolvable | Wafv2LoggingConfigurationLoggingFilterFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>[]

The filters that you want to apply to the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#filters Wafv2LoggingConfiguration#filters}

---

### Wafv2LoggingConfigurationLoggingFilterFilters <a name="Wafv2LoggingConfigurationLoggingFilterFilters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const wafv2LoggingConfigurationLoggingFilterFilters: wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.behavior">behavior</a></code> | <code>string</code> | How to handle logs that satisfy the filter's conditions and requirement. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>[]</code> | Match conditions for the filter. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.requirement">requirement</a></code> | <code>string</code> | Logic to apply to the filtering conditions. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

How to handle logs that satisfy the filter's conditions and requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#behavior Wafv2LoggingConfiguration#behavior}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | Wafv2LoggingConfigurationLoggingFilterFiltersConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>[]

Match conditions for the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#conditions Wafv2LoggingConfiguration#conditions}

---

##### `requirement`<sup>Optional</sup> <a name="requirement" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters.property.requirement"></a>

```typescript
public readonly requirement: string;
```

- *Type:* string

Logic to apply to the filtering conditions.

You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#requirement Wafv2LoggingConfiguration#requirement}

---

### Wafv2LoggingConfigurationLoggingFilterFiltersConditions <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const wafv2LoggingConfigurationLoggingFilterFiltersConditions: wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.property.actionCondition">actionCondition</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a></code> | A single action condition. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.property.labelNameCondition">labelNameCondition</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a></code> | A single label name condition. |

---

##### `actionCondition`<sup>Optional</sup> <a name="actionCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.property.actionCondition"></a>

```typescript
public readonly actionCondition: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a>

A single action condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#action_condition Wafv2LoggingConfiguration#action_condition}

---

##### `labelNameCondition`<sup>Optional</sup> <a name="labelNameCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions.property.labelNameCondition"></a>

```typescript
public readonly labelNameCondition: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a>

A single label name condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#label_name_condition Wafv2LoggingConfiguration#label_name_condition}

---

### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition: wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition.property.action">action</a></code> | <code>string</code> | Logic to apply to the filtering conditions. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Logic to apply to the filtering conditions.

You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#action Wafv2LoggingConfiguration#action}

---

### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition: wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition.property.labelName">labelName</a></code> | <code>string</code> | The label name that a log record must contain in order to meet the condition. |

---

##### `labelName`<sup>Optional</sup> <a name="labelName" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition.property.labelName"></a>

```typescript
public readonly labelName: string;
```

- *Type:* string

The label name that a log record must contain in order to meet the condition.

This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#label_name Wafv2LoggingConfiguration#label_name}

---

### Wafv2LoggingConfigurationRedactedFields <a name="Wafv2LoggingConfigurationRedactedFields" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const wafv2LoggingConfigurationRedactedFields: wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.method">method</a></code> | <code>string</code> | Inspect the HTTP method. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.queryString">queryString</a></code> | <code>string</code> | Inspect the query string. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.singleHeader">singleHeader</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a></code> | Inspect a single header. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.uriPath">uriPath</a></code> | <code>string</code> | Inspect the request URI path. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Inspect the HTTP method.

The method indicates the type of operation that the request is asking the origin to perform. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#method Wafv2LoggingConfiguration#method}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

Inspect the query string.

This is the part of a URL that appears after a ? character, if any. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#query_string Wafv2LoggingConfiguration#query_string}

---

##### `singleHeader`<sup>Optional</sup> <a name="singleHeader" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.singleHeader"></a>

```typescript
public readonly singleHeader: Wafv2LoggingConfigurationRedactedFieldsSingleHeader;
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a>

Inspect a single header.

Provide the name of the header to inspect, for example, User-Agent or Referer. This setting isn't case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#single_header Wafv2LoggingConfiguration#single_header}

---

##### `uriPath`<sup>Optional</sup> <a name="uriPath" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields.property.uriPath"></a>

```typescript
public readonly uriPath: string;
```

- *Type:* string

Inspect the request URI path.

This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#uri_path Wafv2LoggingConfiguration#uri_path}

---

### Wafv2LoggingConfigurationRedactedFieldsSingleHeader <a name="Wafv2LoggingConfigurationRedactedFieldsSingleHeader" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

const wafv2LoggingConfigurationRedactedFieldsSingleHeader: wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader.property.name">name</a></code> | <code>string</code> | The name of the query header to inspect. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the query header to inspect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wafv2_logging_configuration#name Wafv2LoggingConfiguration#name}

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resetAction">resetAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a>

---


### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resetLabelName">resetLabelName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabelName` <a name="resetLabelName" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resetLabelName"></a>

```typescript
public resetLabelName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelNameInput">labelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName">labelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelNameInput`<sup>Optional</sup> <a name="labelNameInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelNameInput"></a>

```typescript
public readonly labelNameInput: string;
```

- *Type:* string

---

##### `labelName`<sup>Required</sup> <a name="labelName" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName"></a>

```typescript
public readonly labelName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a>

---


### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get"></a>

```typescript
public get(index: number): Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2LoggingConfigurationLoggingFilterFiltersConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>[]

---


### Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putActionCondition">putActionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition">putLabelNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resetActionCondition">resetActionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resetLabelNameCondition">resetLabelNameCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActionCondition` <a name="putActionCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putActionCondition"></a>

```typescript
public putActionCondition(value: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putActionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a>

---

##### `putLabelNameCondition` <a name="putLabelNameCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition"></a>

```typescript
public putLabelNameCondition(value: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a>

---

##### `resetActionCondition` <a name="resetActionCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resetActionCondition"></a>

```typescript
public resetActionCondition(): void
```

##### `resetLabelNameCondition` <a name="resetLabelNameCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resetLabelNameCondition"></a>

```typescript
public resetLabelNameCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionCondition">actionCondition</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition">labelNameCondition</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionConditionInput">actionConditionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameConditionInput">labelNameConditionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionCondition`<sup>Required</sup> <a name="actionCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionCondition"></a>

```typescript
public readonly actionCondition: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference</a>

---

##### `labelNameCondition`<sup>Required</sup> <a name="labelNameCondition" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition"></a>

```typescript
public readonly labelNameCondition: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a>

---

##### `actionConditionInput`<sup>Optional</sup> <a name="actionConditionInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionConditionInput"></a>

```typescript
public readonly actionConditionInput: IResolvable | Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a>

---

##### `labelNameConditionInput`<sup>Optional</sup> <a name="labelNameConditionInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameConditionInput"></a>

```typescript
public readonly labelNameConditionInput: IResolvable | Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2LoggingConfigurationLoggingFilterFiltersConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>

---


### Wafv2LoggingConfigurationLoggingFilterFiltersList <a name="Wafv2LoggingConfigurationLoggingFilterFiltersList" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.get"></a>

```typescript
public get(index: number): Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2LoggingConfigurationLoggingFilterFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>[]

---


### Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetBehavior">resetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetRequirement">resetRequirement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | Wafv2LoggingConfigurationLoggingFilterFiltersConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>[]

---

##### `resetBehavior` <a name="resetBehavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetBehavior"></a>

```typescript
public resetBehavior(): void
```

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetRequirement` <a name="resetRequirement" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resetRequirement"></a>

```typescript
public resetRequirement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirementInput">requirementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirement">requirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditions"></a>

```typescript
public readonly conditions: Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList">Wafv2LoggingConfigurationLoggingFilterFiltersConditionsList</a>

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | Wafv2LoggingConfigurationLoggingFilterFiltersConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersConditions">Wafv2LoggingConfigurationLoggingFilterFiltersConditions</a>[]

---

##### `requirementInput`<sup>Optional</sup> <a name="requirementInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirementInput"></a>

```typescript
public readonly requirementInput: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirement"></a>

```typescript
public readonly requirement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2LoggingConfigurationLoggingFilterFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>

---


### Wafv2LoggingConfigurationLoggingFilterOutputReference <a name="Wafv2LoggingConfigurationLoggingFilterOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resetDefaultBehavior">resetDefaultBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resetFilters">resetFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilters` <a name="putFilters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.putFilters"></a>

```typescript
public putFilters(value: IResolvable | Wafv2LoggingConfigurationLoggingFilterFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>[]

---

##### `resetDefaultBehavior` <a name="resetDefaultBehavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resetDefaultBehavior"></a>

```typescript
public resetDefaultBehavior(): void
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.resetFilters"></a>

```typescript
public resetFilters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList">Wafv2LoggingConfigurationLoggingFilterFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehaviorInput">defaultBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.filtersInput">filtersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehavior">defaultBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.filters"></a>

```typescript
public readonly filters: Wafv2LoggingConfigurationLoggingFilterFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFiltersList">Wafv2LoggingConfigurationLoggingFilterFiltersList</a>

---

##### `defaultBehaviorInput`<sup>Optional</sup> <a name="defaultBehaviorInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehaviorInput"></a>

```typescript
public readonly defaultBehaviorInput: string;
```

- *Type:* string

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | Wafv2LoggingConfigurationLoggingFilterFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterFilters">Wafv2LoggingConfigurationLoggingFilterFilters</a>[]

---

##### `defaultBehavior`<sup>Required</sup> <a name="defaultBehavior" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehavior"></a>

```typescript
public readonly defaultBehavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2LoggingConfigurationLoggingFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationLoggingFilter">Wafv2LoggingConfigurationLoggingFilter</a>

---


### Wafv2LoggingConfigurationRedactedFieldsList <a name="Wafv2LoggingConfigurationRedactedFieldsList" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.get"></a>

```typescript
public get(index: number): Wafv2LoggingConfigurationRedactedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2LoggingConfigurationRedactedFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>[]

---


### Wafv2LoggingConfigurationRedactedFieldsOutputReference <a name="Wafv2LoggingConfigurationRedactedFieldsOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.putSingleHeader">putSingleHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetSingleHeader">resetSingleHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetUriPath">resetUriPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSingleHeader` <a name="putSingleHeader" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.putSingleHeader"></a>

```typescript
public putSingleHeader(value: Wafv2LoggingConfigurationRedactedFieldsSingleHeader): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.putSingleHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a>

---

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```

##### `resetSingleHeader` <a name="resetSingleHeader" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetSingleHeader"></a>

```typescript
public resetSingleHeader(): void
```

##### `resetUriPath` <a name="resetUriPath" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.resetUriPath"></a>

```typescript
public resetUriPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeader">singleHeader</a></code> | <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference">Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeaderInput">singleHeaderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPathInput">uriPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPath">uriPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `singleHeader`<sup>Required</sup> <a name="singleHeader" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeader"></a>

```typescript
public readonly singleHeader: Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference">Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference</a>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `singleHeaderInput`<sup>Optional</sup> <a name="singleHeaderInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeaderInput"></a>

```typescript
public readonly singleHeaderInput: IResolvable | Wafv2LoggingConfigurationRedactedFieldsSingleHeader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a>

---

##### `uriPathInput`<sup>Optional</sup> <a name="uriPathInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPathInput"></a>

```typescript
public readonly uriPathInput: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `uriPath`<sup>Required</sup> <a name="uriPath" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPath"></a>

```typescript
public readonly uriPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2LoggingConfigurationRedactedFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFields">Wafv2LoggingConfigurationRedactedFields</a>

---


### Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference <a name="Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer"></a>

```typescript
import { wafv2LoggingConfiguration } from '@cdktn/provider-awscc'

new wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2LoggingConfigurationRedactedFieldsSingleHeader;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wafv2LoggingConfiguration.Wafv2LoggingConfigurationRedactedFieldsSingleHeader">Wafv2LoggingConfigurationRedactedFieldsSingleHeader</a>

---




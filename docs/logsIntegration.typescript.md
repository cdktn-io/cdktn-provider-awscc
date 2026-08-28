# `logsIntegration` Submodule <a name="`logsIntegration` Submodule" id="@cdktn/provider-awscc.logsIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsIntegration <a name="LogsIntegration" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration awscc_logs_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer"></a>

```typescript
import { logsIntegration } from '@cdktn/provider-awscc'

new logsIntegration.LogsIntegration(scope: Construct, id: string, config: LogsIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig">LogsIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig">LogsIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.putResourceConfig">putResourceConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceConfig` <a name="putResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.putResourceConfig"></a>

```typescript
public putResourceConfig(value: LogsIntegrationResourceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.putResourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isConstruct"></a>

```typescript
import { logsIntegration } from '@cdktn/provider-awscc'

logsIntegration.LogsIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformElement"></a>

```typescript
import { logsIntegration } from '@cdktn/provider-awscc'

logsIntegration.LogsIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformResource"></a>

```typescript
import { logsIntegration } from '@cdktn/provider-awscc'

logsIntegration.LogsIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport"></a>

```typescript
import { logsIntegration } from '@cdktn/provider-awscc'

logsIntegration.LogsIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LogsIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogsIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationStatus">integrationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.resourceConfig">resourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference">LogsIntegrationResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationNameInput">integrationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationTypeInput">integrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.resourceConfigInput">resourceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationName">integrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationType">integrationType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationStatus`<sup>Required</sup> <a name="integrationStatus" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationStatus"></a>

```typescript
public readonly integrationStatus: string;
```

- *Type:* string

---

##### `resourceConfig`<sup>Required</sup> <a name="resourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.resourceConfig"></a>

```typescript
public readonly resourceConfig: LogsIntegrationResourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference">LogsIntegrationResourceConfigOutputReference</a>

---

##### `integrationNameInput`<sup>Optional</sup> <a name="integrationNameInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationNameInput"></a>

```typescript
public readonly integrationNameInput: string;
```

- *Type:* string

---

##### `integrationTypeInput`<sup>Optional</sup> <a name="integrationTypeInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationTypeInput"></a>

```typescript
public readonly integrationTypeInput: string;
```

- *Type:* string

---

##### `resourceConfigInput`<sup>Optional</sup> <a name="resourceConfigInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.resourceConfigInput"></a>

```typescript
public readonly resourceConfigInput: IResolvable | LogsIntegrationResourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a>

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationName"></a>

```typescript
public readonly integrationName: string;
```

- *Type:* string

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsIntegrationConfig <a name="LogsIntegrationConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.Initializer"></a>

```typescript
import { logsIntegration } from '@cdktn/provider-awscc'

const logsIntegrationConfig: logsIntegration.LogsIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.integrationName">integrationName</a></code> | <code>string</code> | User provided identifier for integration, unique to the user account. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.integrationType">integrationType</a></code> | <code>string</code> | The type of the Integration. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.resourceConfig">resourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a></code> | OpenSearchResourceConfig for the given Integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `integrationName`<sup>Required</sup> <a name="integrationName" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.integrationName"></a>

```typescript
public readonly integrationName: string;
```

- *Type:* string

User provided identifier for integration, unique to the user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#integration_name LogsIntegration#integration_name}

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

The type of the Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#integration_type LogsIntegration#integration_type}

---

##### `resourceConfig`<sup>Required</sup> <a name="resourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.resourceConfig"></a>

```typescript
public readonly resourceConfig: LogsIntegrationResourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a>

OpenSearchResourceConfig for the given Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#resource_config LogsIntegration#resource_config}

---

### LogsIntegrationResourceConfig <a name="LogsIntegrationResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig.Initializer"></a>

```typescript
import { logsIntegration } from '@cdktn/provider-awscc'

const logsIntegrationResourceConfig: logsIntegration.LogsIntegrationResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig.property.openSearchResourceConfig">openSearchResourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#open_search_resource_config LogsIntegration#open_search_resource_config}. |

---

##### `openSearchResourceConfig`<sup>Optional</sup> <a name="openSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig.property.openSearchResourceConfig"></a>

```typescript
public readonly openSearchResourceConfig: LogsIntegrationResourceConfigOpenSearchResourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#open_search_resource_config LogsIntegration#open_search_resource_config}.

---

### LogsIntegrationResourceConfigOpenSearchResourceConfig <a name="LogsIntegrationResourceConfigOpenSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.Initializer"></a>

```typescript
import { logsIntegration } from '@cdktn/provider-awscc'

const logsIntegrationResourceConfigOpenSearchResourceConfig: logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.applicationArn">applicationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#application_arn LogsIntegration#application_arn}. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.dashboardViewerPrincipals">dashboardViewerPrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#dashboard_viewer_principals LogsIntegration#dashboard_viewer_principals}. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.dataSourceRoleArn">dataSourceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#data_source_role_arn LogsIntegration#data_source_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#kms_key_arn LogsIntegration#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#retention_days LogsIntegration#retention_days}. |

---

##### `applicationArn`<sup>Optional</sup> <a name="applicationArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#application_arn LogsIntegration#application_arn}.

---

##### `dashboardViewerPrincipals`<sup>Optional</sup> <a name="dashboardViewerPrincipals" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.dashboardViewerPrincipals"></a>

```typescript
public readonly dashboardViewerPrincipals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#dashboard_viewer_principals LogsIntegration#dashboard_viewer_principals}.

---

##### `dataSourceRoleArn`<sup>Optional</sup> <a name="dataSourceRoleArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.dataSourceRoleArn"></a>

```typescript
public readonly dataSourceRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#data_source_role_arn LogsIntegration#data_source_role_arn}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#kms_key_arn LogsIntegration#kms_key_arn}.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#retention_days LogsIntegration#retention_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference <a name="LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer"></a>

```typescript
import { logsIntegration } from '@cdktn/provider-awscc'

new logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetApplicationArn">resetApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetDashboardViewerPrincipals">resetDashboardViewerPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetDataSourceRoleArn">resetDataSourceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationArn` <a name="resetApplicationArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetApplicationArn"></a>

```typescript
public resetApplicationArn(): void
```

##### `resetDashboardViewerPrincipals` <a name="resetDashboardViewerPrincipals" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetDashboardViewerPrincipals"></a>

```typescript
public resetDashboardViewerPrincipals(): void
```

##### `resetDataSourceRoleArn` <a name="resetDataSourceRoleArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetDataSourceRoleArn"></a>

```typescript
public resetDataSourceRoleArn(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.applicationArnInput">applicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dashboardViewerPrincipalsInput">dashboardViewerPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dataSourceRoleArnInput">dataSourceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dashboardViewerPrincipals">dashboardViewerPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dataSourceRoleArn">dataSourceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationArnInput`<sup>Optional</sup> <a name="applicationArnInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.applicationArnInput"></a>

```typescript
public readonly applicationArnInput: string;
```

- *Type:* string

---

##### `dashboardViewerPrincipalsInput`<sup>Optional</sup> <a name="dashboardViewerPrincipalsInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dashboardViewerPrincipalsInput"></a>

```typescript
public readonly dashboardViewerPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `dataSourceRoleArnInput`<sup>Optional</sup> <a name="dataSourceRoleArnInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dataSourceRoleArnInput"></a>

```typescript
public readonly dataSourceRoleArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `dashboardViewerPrincipals`<sup>Required</sup> <a name="dashboardViewerPrincipals" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dashboardViewerPrincipals"></a>

```typescript
public readonly dashboardViewerPrincipals: string[];
```

- *Type:* string[]

---

##### `dataSourceRoleArn`<sup>Required</sup> <a name="dataSourceRoleArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dataSourceRoleArn"></a>

```typescript
public readonly dataSourceRoleArn: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsIntegrationResourceConfigOpenSearchResourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a>

---


### LogsIntegrationResourceConfigOutputReference <a name="LogsIntegrationResourceConfigOutputReference" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer"></a>

```typescript
import { logsIntegration } from '@cdktn/provider-awscc'

new logsIntegration.LogsIntegrationResourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.putOpenSearchResourceConfig">putOpenSearchResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resetOpenSearchResourceConfig">resetOpenSearchResourceConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOpenSearchResourceConfig` <a name="putOpenSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.putOpenSearchResourceConfig"></a>

```typescript
public putOpenSearchResourceConfig(value: LogsIntegrationResourceConfigOpenSearchResourceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.putOpenSearchResourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a>

---

##### `resetOpenSearchResourceConfig` <a name="resetOpenSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resetOpenSearchResourceConfig"></a>

```typescript
public resetOpenSearchResourceConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.openSearchResourceConfig">openSearchResourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference">LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.openSearchResourceConfigInput">openSearchResourceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `openSearchResourceConfig`<sup>Required</sup> <a name="openSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.openSearchResourceConfig"></a>

```typescript
public readonly openSearchResourceConfig: LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference">LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference</a>

---

##### `openSearchResourceConfigInput`<sup>Optional</sup> <a name="openSearchResourceConfigInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.openSearchResourceConfigInput"></a>

```typescript
public readonly openSearchResourceConfigInput: IResolvable | LogsIntegrationResourceConfigOpenSearchResourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsIntegrationResourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a>

---




# `supportappSlackWorkspaceConfiguration` Submodule <a name="`supportappSlackWorkspaceConfiguration` Submodule" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupportappSlackWorkspaceConfiguration <a name="SupportappSlackWorkspaceConfiguration" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportapp_slack_workspace_configuration awscc_supportapp_slack_workspace_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer"></a>

```typescript
import { supportappSlackWorkspaceConfiguration } from '@cdktn/provider-awscc'

new supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration(scope: Construct, id: string, config: SupportappSlackWorkspaceConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig">SupportappSlackWorkspaceConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig">SupportappSlackWorkspaceConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetVersionId` <a name="resetVersionId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.resetVersionId"></a>

```typescript
public resetVersionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SupportappSlackWorkspaceConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isConstruct"></a>

```typescript
import { supportappSlackWorkspaceConfiguration } from '@cdktn/provider-awscc'

supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformElement"></a>

```typescript
import { supportappSlackWorkspaceConfiguration } from '@cdktn/provider-awscc'

supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformResource"></a>

```typescript
import { supportappSlackWorkspaceConfiguration } from '@cdktn/provider-awscc'

supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport"></a>

```typescript
import { supportappSlackWorkspaceConfiguration } from '@cdktn/provider-awscc'

supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SupportappSlackWorkspaceConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SupportappSlackWorkspaceConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SupportappSlackWorkspaceConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportapp_slack_workspace_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SupportappSlackWorkspaceConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SupportappSlackWorkspaceConfigurationConfig <a name="SupportappSlackWorkspaceConfigurationConfig" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.Initializer"></a>

```typescript
import { supportappSlackWorkspaceConfiguration } from '@cdktn/provider-awscc'

const supportappSlackWorkspaceConfigurationConfig: supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.teamId">teamId</a></code> | <code>string</code> | The team ID in Slack, which uniquely identifies a workspace. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.versionId">versionId</a></code> | <code>string</code> | An identifier used to update an existing Slack workspace configuration in AWS CloudFormation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

The team ID in Slack, which uniquely identifies a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportapp_slack_workspace_configuration#team_id SupportappSlackWorkspaceConfiguration#team_id}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-awscc.supportappSlackWorkspaceConfiguration.SupportappSlackWorkspaceConfigurationConfig.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

An identifier used to update an existing Slack workspace configuration in AWS CloudFormation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportapp_slack_workspace_configuration#version_id SupportappSlackWorkspaceConfiguration#version_id}

---




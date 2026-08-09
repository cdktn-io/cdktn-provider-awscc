# `supportappSlackChannelConfiguration` Submodule <a name="`supportappSlackChannelConfiguration` Submodule" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupportappSlackChannelConfiguration <a name="SupportappSlackChannelConfiguration" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration awscc_supportapp_slack_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer"></a>

```typescript
import { supportappSlackChannelConfiguration } from '@cdktn/provider-awscc'

new supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration(scope: Construct, id: string, config: SupportappSlackChannelConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig">SupportappSlackChannelConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig">SupportappSlackChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetChannelName">resetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnAddCorrespondenceToCase">resetNotifyOnAddCorrespondenceToCase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnCreateOrReopenCase">resetNotifyOnCreateOrReopenCase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnResolveCase">resetNotifyOnResolveCase</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetChannelName` <a name="resetChannelName" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetChannelName"></a>

```typescript
public resetChannelName(): void
```

##### `resetNotifyOnAddCorrespondenceToCase` <a name="resetNotifyOnAddCorrespondenceToCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnAddCorrespondenceToCase"></a>

```typescript
public resetNotifyOnAddCorrespondenceToCase(): void
```

##### `resetNotifyOnCreateOrReopenCase` <a name="resetNotifyOnCreateOrReopenCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnCreateOrReopenCase"></a>

```typescript
public resetNotifyOnCreateOrReopenCase(): void
```

##### `resetNotifyOnResolveCase` <a name="resetNotifyOnResolveCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnResolveCase"></a>

```typescript
public resetNotifyOnResolveCase(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SupportappSlackChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isConstruct"></a>

```typescript
import { supportappSlackChannelConfiguration } from '@cdktn/provider-awscc'

supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformElement"></a>

```typescript
import { supportappSlackChannelConfiguration } from '@cdktn/provider-awscc'

supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformResource"></a>

```typescript
import { supportappSlackChannelConfiguration } from '@cdktn/provider-awscc'

supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport"></a>

```typescript
import { supportappSlackChannelConfiguration } from '@cdktn/provider-awscc'

supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SupportappSlackChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SupportappSlackChannelConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SupportappSlackChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SupportappSlackChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelRoleArnInput">channelRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCaseInput">notifyOnAddCorrespondenceToCaseInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCaseSeverityInput">notifyOnCaseSeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCaseInput">notifyOnCreateOrReopenCaseInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnResolveCaseInput">notifyOnResolveCaseInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelRoleArn">channelRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCase">notifyOnAddCorrespondenceToCase</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCaseSeverity">notifyOnCaseSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCase">notifyOnCreateOrReopenCase</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnResolveCase">notifyOnResolveCase</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `channelRoleArnInput`<sup>Optional</sup> <a name="channelRoleArnInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelRoleArnInput"></a>

```typescript
public readonly channelRoleArnInput: string;
```

- *Type:* string

---

##### `notifyOnAddCorrespondenceToCaseInput`<sup>Optional</sup> <a name="notifyOnAddCorrespondenceToCaseInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCaseInput"></a>

```typescript
public readonly notifyOnAddCorrespondenceToCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notifyOnCaseSeverityInput`<sup>Optional</sup> <a name="notifyOnCaseSeverityInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCaseSeverityInput"></a>

```typescript
public readonly notifyOnCaseSeverityInput: string;
```

- *Type:* string

---

##### `notifyOnCreateOrReopenCaseInput`<sup>Optional</sup> <a name="notifyOnCreateOrReopenCaseInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCaseInput"></a>

```typescript
public readonly notifyOnCreateOrReopenCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notifyOnResolveCaseInput`<sup>Optional</sup> <a name="notifyOnResolveCaseInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnResolveCaseInput"></a>

```typescript
public readonly notifyOnResolveCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `channelRoleArn`<sup>Required</sup> <a name="channelRoleArn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelRoleArn"></a>

```typescript
public readonly channelRoleArn: string;
```

- *Type:* string

---

##### `notifyOnAddCorrespondenceToCase`<sup>Required</sup> <a name="notifyOnAddCorrespondenceToCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCase"></a>

```typescript
public readonly notifyOnAddCorrespondenceToCase: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notifyOnCaseSeverity`<sup>Required</sup> <a name="notifyOnCaseSeverity" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCaseSeverity"></a>

```typescript
public readonly notifyOnCaseSeverity: string;
```

- *Type:* string

---

##### `notifyOnCreateOrReopenCase`<sup>Required</sup> <a name="notifyOnCreateOrReopenCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCase"></a>

```typescript
public readonly notifyOnCreateOrReopenCase: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notifyOnResolveCase`<sup>Required</sup> <a name="notifyOnResolveCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnResolveCase"></a>

```typescript
public readonly notifyOnResolveCase: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SupportappSlackChannelConfigurationConfig <a name="SupportappSlackChannelConfigurationConfig" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.Initializer"></a>

```typescript
import { supportappSlackChannelConfiguration } from '@cdktn/provider-awscc'

const supportappSlackChannelConfigurationConfig: supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelId">channelId</a></code> | <code>string</code> | The channel ID in Slack, which identifies a channel within a workspace. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelRoleArn">channelRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS services. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnCaseSeverity">notifyOnCaseSeverity</a></code> | <code>string</code> | The severity level of a support case that a customer wants to get notified for. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.teamId">teamId</a></code> | <code>string</code> | The team ID in Slack, which uniquely identifies a workspace. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelName">channelName</a></code> | <code>string</code> | The channel name in Slack. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnAddCorrespondenceToCase">notifyOnAddCorrespondenceToCase</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to notify when a correspondence is added to a case. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnCreateOrReopenCase">notifyOnCreateOrReopenCase</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to notify when a case is created or reopened. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnResolveCase">notifyOnResolveCase</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to notify when a case is resolved. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

The channel ID in Slack, which identifies a channel within a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#channel_id SupportappSlackChannelConfiguration#channel_id}

---

##### `channelRoleArn`<sup>Required</sup> <a name="channelRoleArn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelRoleArn"></a>

```typescript
public readonly channelRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#channel_role_arn SupportappSlackChannelConfiguration#channel_role_arn}

---

##### `notifyOnCaseSeverity`<sup>Required</sup> <a name="notifyOnCaseSeverity" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnCaseSeverity"></a>

```typescript
public readonly notifyOnCaseSeverity: string;
```

- *Type:* string

The severity level of a support case that a customer wants to get notified for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#notify_on_case_severity SupportappSlackChannelConfiguration#notify_on_case_severity}

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

The team ID in Slack, which uniquely identifies a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#team_id SupportappSlackChannelConfiguration#team_id}

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The channel name in Slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#channel_name SupportappSlackChannelConfiguration#channel_name}

---

##### `notifyOnAddCorrespondenceToCase`<sup>Optional</sup> <a name="notifyOnAddCorrespondenceToCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnAddCorrespondenceToCase"></a>

```typescript
public readonly notifyOnAddCorrespondenceToCase: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to notify when a correspondence is added to a case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#notify_on_add_correspondence_to_case SupportappSlackChannelConfiguration#notify_on_add_correspondence_to_case}

---

##### `notifyOnCreateOrReopenCase`<sup>Optional</sup> <a name="notifyOnCreateOrReopenCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnCreateOrReopenCase"></a>

```typescript
public readonly notifyOnCreateOrReopenCase: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to notify when a case is created or reopened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#notify_on_create_or_reopen_case SupportappSlackChannelConfiguration#notify_on_create_or_reopen_case}

---

##### `notifyOnResolveCase`<sup>Optional</sup> <a name="notifyOnResolveCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnResolveCase"></a>

```typescript
public readonly notifyOnResolveCase: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to notify when a case is resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#notify_on_resolve_case SupportappSlackChannelConfiguration#notify_on_resolve_case}

---




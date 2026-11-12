# `cloudwatchAlert` Submodule <a name="`cloudwatchAlert` Submodule" id="@cdktn/provider-awscc.cloudwatchAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAlert <a name="CloudwatchAlert" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert awscc_cloudwatch_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

new cloudwatchAlert.CloudwatchAlert(scope: Construct, id: string, config: CloudwatchAlertConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig">CloudwatchAlertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig">CloudwatchAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putNotificationRules">putNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationRules">resetNotificationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationsEnabled">resetNotificationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotificationRules` <a name="putNotificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putNotificationRules"></a>

```typescript
public putNotificationRules(value: IResolvable | CloudwatchAlertNotificationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putNotificationRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>[]

---

##### `putRule` <a name="putRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putRule"></a>

```typescript
public putRule(value: CloudwatchAlertRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putTags"></a>

```typescript
public putTags(value: IResolvable | CloudwatchAlertTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetNotificationRules` <a name="resetNotificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationRules"></a>

```typescript
public resetNotificationRules(): void
```

##### `resetNotificationsEnabled` <a name="resetNotificationsEnabled" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationsEnabled"></a>

```typescript
public resetNotificationsEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchAlert resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isConstruct"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

cloudwatchAlert.CloudwatchAlert.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformElement"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

cloudwatchAlert.CloudwatchAlert.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformResource"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

cloudwatchAlert.CloudwatchAlert.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

cloudwatchAlert.CloudwatchAlert.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchAlert resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.alertId">alertId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRules">notificationRules</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList">CloudwatchAlertNotificationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference">CloudwatchAlertRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList">CloudwatchAlertTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRulesInput">notificationRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabledInput">notificationsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceIdInput">spaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabled">notificationsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceId">spaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `alertId`<sup>Required</sup> <a name="alertId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.alertId"></a>

```typescript
public readonly alertId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `notificationRules`<sup>Required</sup> <a name="notificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRules"></a>

```typescript
public readonly notificationRules: CloudwatchAlertNotificationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList">CloudwatchAlertNotificationRulesList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.rule"></a>

```typescript
public readonly rule: CloudwatchAlertRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference">CloudwatchAlertRuleOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tags"></a>

```typescript
public readonly tags: CloudwatchAlertTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList">CloudwatchAlertTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationRulesInput`<sup>Optional</sup> <a name="notificationRulesInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRulesInput"></a>

```typescript
public readonly notificationRulesInput: IResolvable | CloudwatchAlertNotificationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>[]

---

##### `notificationsEnabledInput`<sup>Optional</sup> <a name="notificationsEnabledInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabledInput"></a>

```typescript
public readonly notificationsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | CloudwatchAlertRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

---

##### `spaceIdInput`<sup>Optional</sup> <a name="spaceIdInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceIdInput"></a>

```typescript
public readonly spaceIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CloudwatchAlertTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationsEnabled`<sup>Required</sup> <a name="notificationsEnabled" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabled"></a>

```typescript
public readonly notificationsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAlertConfig <a name="CloudwatchAlertConfig" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

const cloudwatchAlertConfig: cloudwatchAlert.CloudwatchAlertConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.name">name</a></code> | <code>string</code> | The display name of the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.profileId">profileId</a></code> | <code>string</code> | The ID of the access profile the alert uses to run its query and send notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a></code> | The rule that defines how the alert is evaluated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.spaceId">spaceId</a></code> | <code>string</code> | The ID of the space to create the alert in. Changing this value replaces the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.description">description</a></code> | <code>string</code> | A description of the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationRules">notificationRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>[]</code> | The notification rules that determine when and where notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationsEnabled">notificationsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the alert sends notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The display name of the alert.

Names don't need to be unique within a space; the alert is identified by AlertId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#name CloudwatchAlert#name}

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The ID of the access profile the alert uses to run its query and send notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#profile_id CloudwatchAlert#profile_id}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.rule"></a>

```typescript
public readonly rule: CloudwatchAlertRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

The rule that defines how the alert is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#rule CloudwatchAlert#rule}

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

The ID of the space to create the alert in. Changing this value replaces the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#space_id CloudwatchAlert#space_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#description CloudwatchAlert#description}

---

##### `notificationRules`<sup>Optional</sup> <a name="notificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationRules"></a>

```typescript
public readonly notificationRules: IResolvable | CloudwatchAlertNotificationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>[]

The notification rules that determine when and where notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#notification_rules CloudwatchAlert#notification_rules}

---

##### `notificationsEnabled`<sup>Optional</sup> <a name="notificationsEnabled" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationsEnabled"></a>

```typescript
public readonly notificationsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the alert sends notifications.

When false, the alert is still evaluated and records its state, but sends nothing. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#notifications_enabled CloudwatchAlert#notifications_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CloudwatchAlertTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#tags CloudwatchAlert#tags}

---

### CloudwatchAlertNotificationRules <a name="CloudwatchAlertNotificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

const cloudwatchAlertNotificationRules: cloudwatchAlert.CloudwatchAlertNotificationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a></code> | Where the notification is sent. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.trigger">trigger</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a></code> | The alert states that trigger the notification rule. |

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.target"></a>

```typescript
public readonly target: CloudwatchAlertNotificationRulesTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

Where the notification is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#target CloudwatchAlert#target}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.trigger"></a>

```typescript
public readonly trigger: CloudwatchAlertNotificationRulesTrigger;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

The alert states that trigger the notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#trigger CloudwatchAlert#trigger}

---

### CloudwatchAlertNotificationRulesTarget <a name="CloudwatchAlertNotificationRulesTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

const cloudwatchAlertNotificationRulesTarget: cloudwatchAlert.CloudwatchAlertNotificationRulesTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.arn">arn</a></code> | <code>string</code> | The ARN of the target. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Settings specific to the target, as key-value pairs (up to 20). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.type">type</a></code> | <code>string</code> | The target type. Valid values: sns, slack, pagerduty. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The ARN of the target.

For sns, the ARN of the Amazon SNS topic. For slack and pagerduty, the ARN of a CloudWatch Omni integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#arn CloudwatchAlert#arn}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Settings specific to the target, as key-value pairs (up to 20).

The keys depend on the integration type. Not used for sns targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#metadata CloudwatchAlert#metadata}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The target type. Valid values: sns, slack, pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#type CloudwatchAlert#type}

---

### CloudwatchAlertNotificationRulesTrigger <a name="CloudwatchAlertNotificationRulesTrigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

const cloudwatchAlertNotificationRulesTrigger: cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger.property.stateValues">stateValues</a></code> | <code>string[]</code> | The alert states that trigger this rule. |

---

##### `stateValues`<sup>Optional</sup> <a name="stateValues" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger.property.stateValues"></a>

```typescript
public readonly stateValues: string[];
```

- *Type:* string[]

The alert states that trigger this rule.

A notification is sent when the alert enters any listed state. If omitted or empty, every state triggers the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#state_values CloudwatchAlert#state_values}

---

### CloudwatchAlertRule <a name="CloudwatchAlertRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

const cloudwatchAlertRule: cloudwatchAlert.CloudwatchAlertRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule.property.telemetryRule">telemetryRule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a></code> | A rule that queries telemetry, evaluates the result against a condition, and sets how missing data is handled. |

---

##### `telemetryRule`<sup>Required</sup> <a name="telemetryRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule.property.telemetryRule"></a>

```typescript
public readonly telemetryRule: CloudwatchAlertRuleTelemetryRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

A rule that queries telemetry, evaluates the result against a condition, and sets how missing data is handled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#telemetry_rule CloudwatchAlert#telemetry_rule}

---

### CloudwatchAlertRuleTelemetryRule <a name="CloudwatchAlertRuleTelemetryRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

const cloudwatchAlertRuleTelemetryRule: cloudwatchAlert.CloudwatchAlertRuleTelemetryRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a></code> | The thresholds that set the alert's state. Specify at least one of WarningThreshold and CriticalThreshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.evaluation">evaluation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a></code> | How often the alert is evaluated, and how long a change must last before the state changes. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.query">query</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a></code> | The query the alert runs, and the language it is written in. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.noData">noData</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a></code> | How the alert behaves when an evaluation returns no data. If omitted, the alert reports NODATA. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.condition"></a>

```typescript
public readonly condition: CloudwatchAlertRuleTelemetryRuleCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

The thresholds that set the alert's state. Specify at least one of WarningThreshold and CriticalThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#condition CloudwatchAlert#condition}

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.evaluation"></a>

```typescript
public readonly evaluation: CloudwatchAlertRuleTelemetryRuleEvaluation;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

How often the alert is evaluated, and how long a change must last before the state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#evaluation CloudwatchAlert#evaluation}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.query"></a>

```typescript
public readonly query: CloudwatchAlertRuleTelemetryRuleQuery;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

The query the alert runs, and the language it is written in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#query CloudwatchAlert#query}

---

##### `noData`<sup>Optional</sup> <a name="noData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.noData"></a>

```typescript
public readonly noData: CloudwatchAlertRuleTelemetryRuleNoData;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

How the alert behaves when an evaluation returns no data. If omitted, the alert reports NODATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#no_data CloudwatchAlert#no_data}

---

### CloudwatchAlertRuleTelemetryRuleCondition <a name="CloudwatchAlertRuleTelemetryRuleCondition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

const cloudwatchAlertRuleTelemetryRuleCondition: cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.comparator">comparator</a></code> | <code>string</code> | The comparison operator. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.criticalThreshold">criticalThreshold</a></code> | <code>number</code> | The value at which the alert enters the CRITICAL state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdField">thresholdField</a></code> | <code>string</code> | The result field to compare against the threshold. Required when ThresholdMode is FIELD_VALUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdMode">thresholdMode</a></code> | <code>string</code> | How the threshold is applied. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.warningThreshold">warningThreshold</a></code> | <code>number</code> | The value at which the alert enters the WARNING state. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

The comparison operator.

Valid values: GT, GTE, LT, LTE (greater than, greater than or equal to, less than, less than or equal to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#comparator CloudwatchAlert#comparator}

---

##### `criticalThreshold`<sup>Optional</sup> <a name="criticalThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.criticalThreshold"></a>

```typescript
public readonly criticalThreshold: number;
```

- *Type:* number

The value at which the alert enters the CRITICAL state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#critical_threshold CloudwatchAlert#critical_threshold}

---

##### `thresholdField`<sup>Optional</sup> <a name="thresholdField" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdField"></a>

```typescript
public readonly thresholdField: string;
```

- *Type:* string

The result field to compare against the threshold. Required when ThresholdMode is FIELD_VALUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#threshold_field CloudwatchAlert#threshold_field}

---

##### `thresholdMode`<sup>Optional</sup> <a name="thresholdMode" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdMode"></a>

```typescript
public readonly thresholdMode: string;
```

- *Type:* string

How the threshold is applied.

COUNT_OF_RESULTS compares the number of rows the query returns. FIELD_VALUE compares the value of ThresholdField in each result row; each row is tracked separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#threshold_mode CloudwatchAlert#threshold_mode}

---

##### `warningThreshold`<sup>Optional</sup> <a name="warningThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.warningThreshold"></a>

```typescript
public readonly warningThreshold: number;
```

- *Type:* number

The value at which the alert enters the WARNING state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#warning_threshold CloudwatchAlert#warning_threshold}

---

### CloudwatchAlertRuleTelemetryRuleEvaluation <a name="CloudwatchAlertRuleTelemetryRuleEvaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

const cloudwatchAlertRuleTelemetryRuleEvaluation: cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | The time between evaluations, in seconds. Valid values: 30, 60, 120, 300, 600, 900, 1800, 3600. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.pendingDurationSeconds">pendingDurationSeconds</a></code> | <code>number</code> | How long a threshold breach must last before the alert changes state, in seconds. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.recoveryDurationSeconds">recoveryDurationSeconds</a></code> | <code>number</code> | How long the result must stay within its thresholds before the alert returns to OK, in seconds. |

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

The time between evaluations, in seconds. Valid values: 30, 60, 120, 300, 600, 900, 1800, 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#interval_seconds CloudwatchAlert#interval_seconds}

---

##### `pendingDurationSeconds`<sup>Optional</sup> <a name="pendingDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.pendingDurationSeconds"></a>

```typescript
public readonly pendingDurationSeconds: number;
```

- *Type:* number

How long a threshold breach must last before the alert changes state, in seconds.

Must be a multiple of IntervalSeconds. 0 changes state immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#pending_duration_seconds CloudwatchAlert#pending_duration_seconds}

---

##### `recoveryDurationSeconds`<sup>Optional</sup> <a name="recoveryDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.recoveryDurationSeconds"></a>

```typescript
public readonly recoveryDurationSeconds: number;
```

- *Type:* number

How long the result must stay within its thresholds before the alert returns to OK, in seconds.

Must be a multiple of IntervalSeconds. 0 returns to OK immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#recovery_duration_seconds CloudwatchAlert#recovery_duration_seconds}

---

### CloudwatchAlertRuleTelemetryRuleNoData <a name="CloudwatchAlertRuleTelemetryRuleNoData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

const cloudwatchAlertRuleTelemetryRuleNoData: cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData.property.treatAs">treatAs</a></code> | <code>string</code> | The state to report when an evaluation returns no data. Valid values: OK, WARNING, CRITICAL, NODATA. |

---

##### `treatAs`<sup>Optional</sup> <a name="treatAs" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData.property.treatAs"></a>

```typescript
public readonly treatAs: string;
```

- *Type:* string

The state to report when an evaluation returns no data. Valid values: OK, WARNING, CRITICAL, NODATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#treat_as CloudwatchAlert#treat_as}

---

### CloudwatchAlertRuleTelemetryRuleQuery <a name="CloudwatchAlertRuleTelemetryRuleQuery" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

const cloudwatchAlertRuleTelemetryRuleQuery: cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.expression">expression</a></code> | <code>string</code> | The query expression. For PromQL, the series value is returned in a field named value. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.language">language</a></code> | <code>string</code> | The query language. Valid values: SQL, PROMQL. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The query expression. For PromQL, the series value is returned in a field named value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#expression CloudwatchAlert#expression}

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

The query language. Valid values: SQL, PROMQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#language CloudwatchAlert#language}

---

### CloudwatchAlertTags <a name="CloudwatchAlertTags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

const cloudwatchAlertTags: cloudwatchAlert.CloudwatchAlertTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#key CloudwatchAlert#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#value CloudwatchAlert#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAlertNotificationRulesList <a name="CloudwatchAlertNotificationRulesList" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

new cloudwatchAlert.CloudwatchAlertNotificationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.get"></a>

```typescript
public get(index: number): CloudwatchAlertNotificationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlertNotificationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>[]

---


### CloudwatchAlertNotificationRulesOutputReference <a name="CloudwatchAlertNotificationRulesOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

new cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTrigger">resetTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTarget"></a>

```typescript
public putTarget(value: CloudwatchAlertNotificationRulesTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

---

##### `putTrigger` <a name="putTrigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTrigger"></a>

```typescript
public putTrigger(value: CloudwatchAlertNotificationRulesTrigger): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

---

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTrigger"></a>

```typescript
public resetTrigger(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference">CloudwatchAlertNotificationRulesTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference">CloudwatchAlertNotificationRulesTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.targetInput">targetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.triggerInput">triggerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.target"></a>

```typescript
public readonly target: CloudwatchAlertNotificationRulesTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference">CloudwatchAlertNotificationRulesTargetOutputReference</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.trigger"></a>

```typescript
public readonly trigger: CloudwatchAlertNotificationRulesTriggerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference">CloudwatchAlertNotificationRulesTriggerOutputReference</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: IResolvable | CloudwatchAlertNotificationRulesTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.triggerInput"></a>

```typescript
public readonly triggerInput: IResolvable | CloudwatchAlertNotificationRulesTrigger;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlertNotificationRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>

---


### CloudwatchAlertNotificationRulesTargetOutputReference <a name="CloudwatchAlertNotificationRulesTargetOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

new cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlertNotificationRulesTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

---


### CloudwatchAlertNotificationRulesTriggerOutputReference <a name="CloudwatchAlertNotificationRulesTriggerOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

new cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resetStateValues">resetStateValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStateValues` <a name="resetStateValues" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resetStateValues"></a>

```typescript
public resetStateValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValuesInput">stateValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValues">stateValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateValuesInput`<sup>Optional</sup> <a name="stateValuesInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValuesInput"></a>

```typescript
public readonly stateValuesInput: string[];
```

- *Type:* string[]

---

##### `stateValues`<sup>Required</sup> <a name="stateValues" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValues"></a>

```typescript
public readonly stateValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlertNotificationRulesTrigger;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

---


### CloudwatchAlertRuleOutputReference <a name="CloudwatchAlertRuleOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

new cloudwatchAlert.CloudwatchAlertRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule">putTelemetryRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTelemetryRule` <a name="putTelemetryRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule"></a>

```typescript
public putTelemetryRule(value: CloudwatchAlertRuleTelemetryRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRule">telemetryRule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference">CloudwatchAlertRuleTelemetryRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRuleInput">telemetryRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `telemetryRule`<sup>Required</sup> <a name="telemetryRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRule"></a>

```typescript
public readonly telemetryRule: CloudwatchAlertRuleTelemetryRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference">CloudwatchAlertRuleTelemetryRuleOutputReference</a>

---

##### `telemetryRuleInput`<sup>Optional</sup> <a name="telemetryRuleInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRuleInput"></a>

```typescript
public readonly telemetryRuleInput: IResolvable | CloudwatchAlertRuleTelemetryRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlertRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

---


### CloudwatchAlertRuleTelemetryRuleConditionOutputReference <a name="CloudwatchAlertRuleTelemetryRuleConditionOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

new cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetComparator">resetComparator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetCriticalThreshold">resetCriticalThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdField">resetThresholdField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdMode">resetThresholdMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetWarningThreshold">resetWarningThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparator` <a name="resetComparator" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetComparator"></a>

```typescript
public resetComparator(): void
```

##### `resetCriticalThreshold` <a name="resetCriticalThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetCriticalThreshold"></a>

```typescript
public resetCriticalThreshold(): void
```

##### `resetThresholdField` <a name="resetThresholdField" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdField"></a>

```typescript
public resetThresholdField(): void
```

##### `resetThresholdMode` <a name="resetThresholdMode" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdMode"></a>

```typescript
public resetThresholdMode(): void
```

##### `resetWarningThreshold` <a name="resetWarningThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetWarningThreshold"></a>

```typescript
public resetWarningThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThresholdInput">criticalThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdFieldInput">thresholdFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdModeInput">thresholdModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThresholdInput">warningThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold">criticalThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField">thresholdField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode">thresholdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold">warningThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `criticalThresholdInput`<sup>Optional</sup> <a name="criticalThresholdInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThresholdInput"></a>

```typescript
public readonly criticalThresholdInput: number;
```

- *Type:* number

---

##### `thresholdFieldInput`<sup>Optional</sup> <a name="thresholdFieldInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdFieldInput"></a>

```typescript
public readonly thresholdFieldInput: string;
```

- *Type:* string

---

##### `thresholdModeInput`<sup>Optional</sup> <a name="thresholdModeInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdModeInput"></a>

```typescript
public readonly thresholdModeInput: string;
```

- *Type:* string

---

##### `warningThresholdInput`<sup>Optional</sup> <a name="warningThresholdInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThresholdInput"></a>

```typescript
public readonly warningThresholdInput: number;
```

- *Type:* number

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `criticalThreshold`<sup>Required</sup> <a name="criticalThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold"></a>

```typescript
public readonly criticalThreshold: number;
```

- *Type:* number

---

##### `thresholdField`<sup>Required</sup> <a name="thresholdField" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField"></a>

```typescript
public readonly thresholdField: string;
```

- *Type:* string

---

##### `thresholdMode`<sup>Required</sup> <a name="thresholdMode" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode"></a>

```typescript
public readonly thresholdMode: string;
```

- *Type:* string

---

##### `warningThreshold`<sup>Required</sup> <a name="warningThreshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold"></a>

```typescript
public readonly warningThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlertRuleTelemetryRuleCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

---


### CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference <a name="CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

new cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetPendingDurationSeconds">resetPendingDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetRecoveryDurationSeconds">resetRecoveryDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPendingDurationSeconds` <a name="resetPendingDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetPendingDurationSeconds"></a>

```typescript
public resetPendingDurationSeconds(): void
```

##### `resetRecoveryDurationSeconds` <a name="resetRecoveryDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetRecoveryDurationSeconds"></a>

```typescript
public resetRecoveryDurationSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSecondsInput">pendingDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSecondsInput">recoveryDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds">pendingDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds">recoveryDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `pendingDurationSecondsInput`<sup>Optional</sup> <a name="pendingDurationSecondsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSecondsInput"></a>

```typescript
public readonly pendingDurationSecondsInput: number;
```

- *Type:* number

---

##### `recoveryDurationSecondsInput`<sup>Optional</sup> <a name="recoveryDurationSecondsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSecondsInput"></a>

```typescript
public readonly recoveryDurationSecondsInput: number;
```

- *Type:* number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `pendingDurationSeconds`<sup>Required</sup> <a name="pendingDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds"></a>

```typescript
public readonly pendingDurationSeconds: number;
```

- *Type:* number

---

##### `recoveryDurationSeconds`<sup>Required</sup> <a name="recoveryDurationSeconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds"></a>

```typescript
public readonly recoveryDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlertRuleTelemetryRuleEvaluation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

---


### CloudwatchAlertRuleTelemetryRuleNoDataOutputReference <a name="CloudwatchAlertRuleTelemetryRuleNoDataOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

new cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resetTreatAs">resetTreatAs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTreatAs` <a name="resetTreatAs" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resetTreatAs"></a>

```typescript
public resetTreatAs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAsInput">treatAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs">treatAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `treatAsInput`<sup>Optional</sup> <a name="treatAsInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAsInput"></a>

```typescript
public readonly treatAsInput: string;
```

- *Type:* string

---

##### `treatAs`<sup>Required</sup> <a name="treatAs" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs"></a>

```typescript
public readonly treatAs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlertRuleTelemetryRuleNoData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

---


### CloudwatchAlertRuleTelemetryRuleOutputReference <a name="CloudwatchAlertRuleTelemetryRuleOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

new cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putEvaluation">putEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putNoData">putNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resetNoData">resetNoData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition"></a>

```typescript
public putCondition(value: CloudwatchAlertRuleTelemetryRuleCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

---

##### `putEvaluation` <a name="putEvaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putEvaluation"></a>

```typescript
public putEvaluation(value: CloudwatchAlertRuleTelemetryRuleEvaluation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

---

##### `putNoData` <a name="putNoData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putNoData"></a>

```typescript
public putNoData(value: CloudwatchAlertRuleTelemetryRuleNoData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putNoData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

---

##### `putQuery` <a name="putQuery" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putQuery"></a>

```typescript
public putQuery(value: CloudwatchAlertRuleTelemetryRuleQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

---

##### `resetNoData` <a name="resetNoData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resetNoData"></a>

```typescript
public resetNoData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference">CloudwatchAlertRuleTelemetryRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluation">evaluation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference">CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noData">noData</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference">CloudwatchAlertRuleTelemetryRuleNoDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference">CloudwatchAlertRuleTelemetryRuleQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.conditionInput">conditionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluationInput">evaluationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noDataInput">noDataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.queryInput">queryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.condition"></a>

```typescript
public readonly condition: CloudwatchAlertRuleTelemetryRuleConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference">CloudwatchAlertRuleTelemetryRuleConditionOutputReference</a>

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluation"></a>

```typescript
public readonly evaluation: CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference">CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference</a>

---

##### `noData`<sup>Required</sup> <a name="noData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noData"></a>

```typescript
public readonly noData: CloudwatchAlertRuleTelemetryRuleNoDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference">CloudwatchAlertRuleTelemetryRuleNoDataOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.query"></a>

```typescript
public readonly query: CloudwatchAlertRuleTelemetryRuleQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference">CloudwatchAlertRuleTelemetryRuleQueryOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | CloudwatchAlertRuleTelemetryRuleCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

---

##### `evaluationInput`<sup>Optional</sup> <a name="evaluationInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluationInput"></a>

```typescript
public readonly evaluationInput: IResolvable | CloudwatchAlertRuleTelemetryRuleEvaluation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

---

##### `noDataInput`<sup>Optional</sup> <a name="noDataInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noDataInput"></a>

```typescript
public readonly noDataInput: IResolvable | CloudwatchAlertRuleTelemetryRuleNoData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: IResolvable | CloudwatchAlertRuleTelemetryRuleQuery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlertRuleTelemetryRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

---


### CloudwatchAlertRuleTelemetryRuleQueryOutputReference <a name="CloudwatchAlertRuleTelemetryRuleQueryOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

new cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlertRuleTelemetryRuleQuery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

---


### CloudwatchAlertTagsList <a name="CloudwatchAlertTagsList" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

new cloudwatchAlert.CloudwatchAlertTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.get"></a>

```typescript
public get(index: number): CloudwatchAlertTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlertTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>[]

---


### CloudwatchAlertTagsOutputReference <a name="CloudwatchAlertTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer"></a>

```typescript
import { cloudwatchAlert } from '@cdktn/provider-awscc'

new cloudwatchAlert.CloudwatchAlertTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchAlertTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>

---



